import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';//引入user.model模块

const models = TypegooseModule.forFeature([User])//全局引用User
@Global()

@Module({
  imports: [
    // 链接数据库
    TypegooseModule.forRoot('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule { }

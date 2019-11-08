//user.models.ts用户模型文件

//引用模块
import { prop } from '@typegoose/typegoose'
export class User {//导出一个用户类来写这个模型
    @prop()//@prop写username属性
    username: string

    @prop()//@prop写password属性
    password: string

}
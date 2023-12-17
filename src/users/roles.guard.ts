import { Injectable, CanActivate,ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./entities/role.enum";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        //1.获取发送请求需要包含的权限
        const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles',[
            context.getHandler(),
            context.getClass(),
        ]);
        if(!requireRoles){
            console.log("没有权限要求")
            return true;
        }
        //2。 获取用户信息
        // const { user} = context.switchToHttp().getRequest()
        //这里随机假设一个用户
        const user = {
            name: 'tom',
            roles: [Role.ADMIN]
        }
        //3. 判断是否有权限
        return requireRoles.some((role)=>user.roles.includes(role));
    }
}

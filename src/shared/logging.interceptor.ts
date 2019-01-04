import { NestInterceptor, ExecutionContext, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import {tap} from "rxjs/operators"


export class LoggingInterceptor implements NestInterceptor {

    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {

        const request = context.switchToHttp().getRequest()
        const time = Date.now()
    
        return call$.pipe(tap(()=>Logger.log(
            `${request.method} ${request.url} ${Date.now() - time}ms`,context.getClass().name
        )))
    }
}
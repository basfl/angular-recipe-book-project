import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
//import 'rxjs/add/operator/do';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor{
    
        intercept(req:HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
            // return next.handle(req).pipe(
            //     do(

            //     )
            // )
            console.log("-----------------------");
            return next.handle(req).pipe(tap(
                event => {
                  console.log('logging interceptor', event);
                }
              ));
            

        }
}
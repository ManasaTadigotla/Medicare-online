import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  /*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
  constructor(private router:Router, private logServ:LoginService)
  {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean|UrlTree {
     // return false;
    
      if(this.logServ.CheckLoginUser()==true)
      {
        alert("true");
        return true;
      }
      else
      {
        alert("false");
        return false;
      }
    /*
      if(this.logServ.CheckLoginUser()==true)
      {
        //console.log("Hello" + this.router.url);
        if(this.router.url.length>0)
        {
            let urlmap = route.url[0].path;
            //console.log("Bye " + urlmap);
            if(urlmap=="awelcome" || urlmap=='vall'||urlmap=='ewelcome')
              return true;
        }
        else
        {
            return false;
        }
      }
      else
      {
         alert("First Login");
         this.router.navigate(['/login']);
         return false;
      }
      */
  }

}

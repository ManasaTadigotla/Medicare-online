import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg:string="";
  phone!: number;
  pswd!: string;
  constructor(private logServ:LoginService, 
    private router:Router) {

      sessionStorage.removeItem("user"); // it will delete all the values from session
     }

  ngOnInit(): void {
  }

  CheckUserDetails()
  {
    if(this.phone==1234 && this.pswd=="123")
    {
      sessionStorage.setItem('user', this.phone.toString());
      //isNavbarVisiableAdmin:boolean=false;
  
      this.router.navigate(['/adminproduct']);

    } else
    {
    this.logServ.getUserByPhone(this.phone).subscribe((res)=>{
      console.log(res);
      const user= res;
      if(user)
      {
      if(user.password==this.pswd)
      {
        //alert(user.phone)
        console.log(user);
      //alert("valid user");
      sessionStorage.setItem("user",user.phone);
      //alert(sessionStorage.getItem("user"));
      //sessionStorage.setItem("cartCount",user.cart.length)
      const previousUrl=sessionStorage.getItem("previousUrl");
      //alert(previousUrl);
      //alert(sessionStorage.getItem("previousUrl"));
      //alert(sessionStorage.getItem("previousUrl"));
      if(previousUrl!=null)
      {
        this.router.navigate([previousUrl]);
      }
      else
      {
        this.router.navigate(['/user']);
      }
      }
      else
      {
        //alert("plz check phone number/password")
      this.msg=("Plz check phone number/password");
      }
    }
    else
    {
      this.msg="This is not registered number.plz register";
    }
     });
    }
  }
}

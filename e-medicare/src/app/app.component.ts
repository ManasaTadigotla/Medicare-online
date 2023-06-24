import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { CartService } from './service/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-medicare';
  isNavbarVisiableAdmin:boolean=false;
  isNavbarVisiableUser:boolean=false;
  isLoggedIn:boolean=false;
  isNotLoggedIn:boolean=!this.isLoggedIn;
  cartCount!:string;
  cartLength:number=0;
  
  constructor(private router:Router,
    private cartServ:CartService){}

  ngOnInit(): void {
  }


 
  ngDoCheck()
  {
      let currenturl = this.router.url; // it will give us, component link text which present in Address bar.
      console.log(currenturl);
      if(sessionStorage.getItem("user")!=null)
      {
        this.isLoggedIn=true;
        this.isNotLoggedIn=false;
      }

      if(currenturl=="/login"  || currenturl=="/register" )
      {
        this.isNavbarVisiableAdmin = false;
        this.isNavbarVisiableUser = false;
      }
      else  if(currenturl=="/admin" || currenturl=="/category" || currenturl=="/adminproduct"||currenturl=="/addnewproduct")
      {
        this.isNavbarVisiableAdmin = true;
        this.isNavbarVisiableUser = false;
      }
      else  
      {
        this.isNavbarVisiableAdmin = false;
        this.isNavbarVisiableUser = true;
        
      }
      
        
  }

}

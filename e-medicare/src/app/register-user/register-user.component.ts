import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  msg:string="";
  locations:any;
  constructor(private builder:FormBuilder,
    private userServ:UserService,
    private loginServ:LoginService,
    private router:Router ) { }

  ngOnInit(): void {
    this.locations=["hyderabad","Karnataka","bangalore","mangalore"];
  }

  NewUser=this.builder.group({
    firstName:this.builder.control('',[Validators.minLength(5),Validators.required]),
    lastName:this.builder.control('',[Validators.required]),
    email :this.builder.control('',[Validators.required,Validators.email]),
    phone :this.builder.control('',[Validators.minLength(10),Validators.required]),
    password:this.builder.control('',[Validators.minLength(5),Validators.required]),
    location:this.builder.control('',[Validators.required]),
    
  })
  
  createUser(regForm:any)
  {
    let isExists:boolean;
    console
    this.loginServ.checkUserByPhone(regForm.value.phone).subscribe(res=>{
      isExists=res;

      console.log(res);
      if(!isExists)
    {
      this.userServ.addNewUser(regForm.value).subscribe(data=>{
        if(data!=null)
        {
          alert("Registered successfully...")
          this.router.navigateByUrl("/login");
        }
      });
    } 
    else
    {
      alert("This Number is already registered!! Please provide another Phone number")
    }
  
    })
    
    
  }
 
}

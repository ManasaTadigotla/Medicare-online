import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { LoginGuard } from './login.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ProductComponent } from './Admin/product/product.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user-home",component:UserHomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterUserComponent},
  {path:"logout",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"categories/:id",component:ViewProductsComponent},
  {path:"products",component:ViewProductsComponent},
  {path:"products/:id",component:ViewProductDetailsComponent},
  {path:"category",component:CategoryComponent},
  {path:"adminproduct",component:ProductComponent,canActivate:[LoginGuard]},
  {path:"adminproduct/:id",component:EditProductComponent},
  {path:"addnewproduct",component:AddProductComponent},
  
  {path:"admin",component:AdminHomeComponent,canActivate:[LoginGuard]},
  {path:"admin/:id",component:AdminHomeComponent,canActivate:[LoginGuard]},
  
  {path:"changepassword",component:ChangePasswordComponent,canActivate:[LoginGuard]},
  {path:"user",component:HomeComponent},
  {path:"showcart",component:ShowCartComponent,canActivate:[LoginGuard]},
  {path:"editcart/:id",component:EditCartComponent,canActivate:[LoginGuard]},

  {path:"showcart/:id",component:ShowCartComponent,canActivate:[LoginGuard]},
  {path:"payment/:amount",component:PaymentComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

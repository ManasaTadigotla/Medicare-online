//import { NgModel } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ProductComponent } from './Admin/product/product.component';
import { NgModule } from '@angular/core';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';
//import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    UserHomeComponent,
    HomeComponent,
    OffersComponent,
    ViewProductsComponent,
    CartItemComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    ChangePasswordComponent,
    ViewProductDetailsComponent,
    ShowCartComponent,
    PaymentComponent,
    CategoryComponent,
    ProductComponent,
    EditProductComponent,
    AddProductComponent,
    RegisterUserComponent,
    EditCartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    NgbCarouselModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

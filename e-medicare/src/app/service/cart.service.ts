import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';
import { Cart } from '../Model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl:string="http://localhost:8188/addtocart";
  apiAll:string="http://localhost:8188/carts";
  apiUpdate:string="http://localhost:8188/cart/update";
  apidelete:string="http://localhost:8188/cart/delete";
  constructor(private http:HttpClient) { }

  addToCart(productId:number,qty:number,phone:any):Observable<any>
  {
    //Product prod=
    return this.http.get<any>(`${this.apiUrl}/${productId}/${qty}/${phone}`);
    
  }
  updateCart(cartId:number,qty:number)
  {
    
    //cart:Cart=new Cart();
    this.getCartById(cartId).subscribe(data=>{
      const cart=data;
      cart.quantity=qty;
      this.http.put<any>(`${this.apiUpdate}+/${cartId}`,cart);

    })
   
  }

  getAllCartItems(phone:number):Observable<Cart>
  {
    return this.http.get<Cart>(`${this.apiAll}/${phone}`);
  }

  getCartById(cartId:number)
  {
    return this.http.get<any>(`${this.apiAll}/${cartId}`)
  }
  deleteCartItem(cartId:number):Observable<any>
  {
    return this.http.delete(`${this.apidelete}/${cartId}`);
  }

  getCartLength()
  {
    return this.http.get(`"http://localhost:8188/cart/length"`);     
    
  }

}

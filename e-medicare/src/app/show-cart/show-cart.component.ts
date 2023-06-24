import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Cart } from '../Model/cart';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  allCartItems:any;
  msg:string="";
  isNotEmptyCart:boolean=true;
  shop: boolean=false;
  totalCartValue:number=0;
  isEdited:boolean=false;
  constructor(private cartServ:CartService,
    private userServ:UserService,
    private router:Router){}

  ngOnInit(): void {
    this.showAllCartItems();
  }

  showAllCartItems()
  {
    const phone=sessionStorage.getItem("user");
    if(phone!=null)
    {
       this.cartServ.getAllCartItems(Number(phone)).subscribe(data=>{
        this.allCartItems=data;
       if(this.allCartItems.length<=0)
       {
        this.isNotEmptyCart=false;
        this.msg="Cart is empty";
        this.shop=true;
        
       }
       else{
        //this.allCartItems.for
        for(let index=0;index< this.allCartItems.length; index++)
        {
          const currentCart=this.allCartItems[index];          
          const singleCartValue=currentCart.quantity*currentCart.product.price;
          this.allCartItems[index].cartValue=singleCartValue;
          this.totalCartValue+=currentCart.quantity*currentCart.product.price;
        }
       }
        console.log(data);   

       })
      
    }
  }

  editCart(cartId:number)
  {
   // this.showAllCartItems();
     //this.isEdited=true;
     this.router.navigateByUrl("/editcart/"+cartId);
  }

  saveCartItem(cartId:number, quantity:number)
  {
      //this.cartServ.
  }
  deleteItem(cartId:number)
  {
    this.cartServ.deleteCartItem(cartId).subscribe(data=>{
      console.log(data);
      alert("deleted");
    this.showAllCartItems();
    })
    
  }
  goToProductsPage()
  {
    this.router.navigateByUrl("/products");
  }
  proceedToPayment()
  {
    this.router.navigateByUrl("/payment/"+this.totalCartValue);
    //this.route.navigateByUrl('/products/'+product.code);
  }
  viewProductDetails(productId:number)
  {

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { Product } from '../Model/product';
import { Cart } from '../Model/cart';
import { CartItem } from '../Model/cart-item';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';

//import { Cart } from '../cart';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  categoryId!:number;
  productList:any;
  cartItem!:any;
  cart!:any;
  cartLength:number=0;
  isGoToCartVisible:boolean=false;
  cssForAdd:string="input-zero-qty";
  msg:string="";
  constructor(
    private aroute:ActivatedRoute,
    private categoryServ:CategoryService,
    private productServ:ProductService,
    private userServ:UserService,
    private route:Router
    
   
  ){}
  ngOnInit(): void {
   const idVal=this.aroute.snapshot.params['id'];
   //console.log(idVal);
   if(idVal!=null)
   this.getProductsByCategory();
   else
   this.getAllProducts();
   this.cssForAdd="input-zero-qty";
  }

  getProductsByCategory()
  {
    this.categoryId= this.aroute.snapshot.params['id'];
    this.productList=this.categoryServ.getProductsByCategory(this.categoryId).subscribe(data=>{
      this.productList=data;
      console.log(data);
    });
  }

  getAllProducts()
  {
    this.productServ.getAllProducts().subscribe(data=>{
      this.productList=data;
    })
  }

  plusProduct(product:Product)
  {
    if(false)
    {/*
      isPlusButton=false;
      isMinusButton=false;
      isAddButton=true;
      */
    }
    else{
      //product.requiredQuantity++;
    }

  }
  minusProduct(product:Product)
  {

  }
  onQuantityChange(event:any,quantity:number)
  {    
    //alert(quantity);
    if(quantity==1)
    {
      this.cartLength++;
      this.isGoToCartVisible=true;
    }else if(quantity==0){
      this.cartLength--;
      //this.isGoToCartVisible=false;
    }   
    
  }
  viewProductDetails(product:Product)
  {
    //sessionStorage.setItem("productDetails",product.code.toString());
    this.route.navigateByUrl('/products/'+product.code);
  }

  addProductsToCart(product:Product)
  {
    if(sessionStorage.getItem("user")!=null)
    {
      
      //this.userServ.getUserByPhone()
      //this.cart.cartCount++;
       //sessionStorage.setItem("cartcount",this.cart.cartCount.toString())
      //alert(this.cart.cartCount);
    //this.cartItem.product=product;
    //this.cartItem.product.requiredQuantity=product.requiredQuantity;
    //this.cartItem.productId=product.code;
    //this.cartItem=product.code;
    //this.cartItem.rate=product.price;
    //this.cartItem.requiredQuantity=product.requiredQuantity;

    this.msg="added to cart"
    this.msg= "Quantity is"+product.requiredQuantity;
    
    //this.route.navigateByUrl("/user");
    //product.requiredQuantity++;
    //alert(product.requiredQuantity);
    //alert("hi");
    //console.log(product.requiredQuantity);
      //this.cart.addItem(product);
    }
    else{
      alert("plz login first");
      this.route.navigateByUrl("/login");
    }
  }


}

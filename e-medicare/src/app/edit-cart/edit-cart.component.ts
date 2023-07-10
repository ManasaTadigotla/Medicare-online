import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.css']
})
export class EditCartComponent implements OnInit{
  cartItem:any;
   isAdded:boolean=false;
   productAdded!:any;
  constructor(private aroute:ActivatedRoute,
    //private productServ:ProductService,
    private cartServ:CartService,
    //private router:Router
    ){}

  ngOnInit(): void {
    const idVal= this.aroute.snapshot.params['id'];
     this.cartServ.getCartById(idVal).subscribe(data=>{
      this.cartItem=data;
    });
  }

  saveProductsToCart(cartId:number,qty:number)
  {
    this.cartServ.updateCart(cartId,qty);
  }

}

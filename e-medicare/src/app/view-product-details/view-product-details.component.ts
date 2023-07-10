import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../Model/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {
   product:any;
   isAdded:boolean=false;
   productAdded!:any;
  constructor(private aroute:ActivatedRoute,
    private productServ:ProductService,
    private cartServ:CartService,
    private router:Router){}

  ngOnInit(): void {
    const idVal= this.aroute.snapshot.params['id'];
     this.productServ.getProductById(idVal).subscribe(data=>{
      this.product=data;
    });
  }
  addProductsToCart(product:Product,quantity:number)
  {
    if(sessionStorage.getItem('user')!=null)
    {
      
    const phone=sessionStorage.getItem('user');
   
    this.cartServ.addToCart(product.code,quantity,Number(phone)).subscribe((data)=>{
      if(data!=null)
      {
        alert("added successfully");
      }
      else
      {
        alert("Product is already added too the cart")
      }
      console.log(data);
     // console.log(this.productAdded);
    }
        
    );    
    }
    else
    {
      alert("plz login first");
     
       sessionStorage.setItem("previousUrl",this.router.url);
       //alert(sessionStorage.getItem("previousUrl"));
      console.log(this.router.url);
      this.router.navigateByUrl('/login');
    }
  }
//It redirects to Products page to continue shopping
  continueShopping()
  {
    this.router.navigateByUrl("/products");
  }

  //Redirects to view cart 
  checkOut()
  {
    this.router.navigateByUrl("/showcart");
  }

  //show all the items added to cart
  ShowCartItems()
  {

  }

}

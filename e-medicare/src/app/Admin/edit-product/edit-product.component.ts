import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  idval: any;
  productDetails: Product=new Product();
  msg:any;
  
  constructor(
    private router:Router,
    private aroute:ActivatedRoute, 
    private builder:FormBuilder,
    private productServ:ProductService
  ){}
  ngOnInit(): void {
  
    this.idval = this.aroute.snapshot.params['id'];
    console.log(this.idval);
    this.productServ.getProductById(this.idval).subscribe(data=>{
      //console.log(data);
      this.productDetails = data;
     console.log("prod details:"+this.productDetails);
    });

  }


  
  ModifyProduct = this.builder.group({
    code: this.builder.control('', Validators.required,),
    name: this.builder.control('', Validators.required),
    brand: this.builder.control('', Validators.required),    
    availability: this.builder.control('', Validators.required), 
    price: this.builder.control('', Validators.required), 
    category: this.builder.control('', Validators.required), 
    isActive: this.builder.control('', Validators.required)
});
  

  UpdateProduct()
  {
    //this.productDetails.name=this.ModifyProduct.controls.name.value;
    this.productServ.updateProductById(this.productDetails).subscribe(data=>{
      if(data==1)
      {
        alert("Product details are updated successfully");
        this.router.navigateByUrl("/adminproduct");
      }
      else
      {
        alert("Something went wrong");
      }
      console.log(data);
     // this.router.navigate(['/viewall']);     
    });

  }

  deleteProduct(id:number)
  {
    if(confirm("Do you want to delete?"))
    {
      this.productServ.deleteProduct(id).subscribe(data=>{
        if(data==1)
        {
          alert("Product is deleted")
        }
      });
   }
  }
}

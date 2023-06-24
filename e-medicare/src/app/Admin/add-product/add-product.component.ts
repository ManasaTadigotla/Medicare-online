import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Model/category';
import { Product } from 'src/app/Model/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categoryList:Category[]=[];
  product:Product=new Product();
  images:any=["assets\\images\\cipla.jpg","assets\\images\\diaper.jpg","assets\\images\\images.jpg"];
  msg:any;
  constructor(
    private router:Router,
    private aroute:ActivatedRoute, 
    private builder:FormBuilder,
    private categoryServ:CategoryService,
    private productServ:ProductService
  ){}
  ngOnInit(): void {
    this.categoryServ.getAllCategories().subscribe(data=>{
      this.categoryList=data;
    })
  }
  

  NewProduct = this.builder.group({    
    name: this.builder.control('', Validators.required),
    brand: this.builder.control('', Validators.required),    
    availableQuantity: this.builder.control('', Validators.required), 
    price: this.builder.control('', Validators.required), 
    categoryId: this.builder.control('', Validators.required), 
    isActive: this.builder.control('', Validators.required)
});
addProduct(form:any)
{
  if(form.value!=null)
  {
    console.log(form.value);
    //this.product=this.NewProduct.value;
    this.productServ.addNewProduct(form.value.categoryId ,form.value).subscribe(data=>{
      if(data!=null)
      {
        alert("Added Successfully");
        this.router.navigateByUrl("/adminproduct");
      }
    })
  }
}
 // builder: any;
}

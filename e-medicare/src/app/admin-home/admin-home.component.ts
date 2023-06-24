import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { Category } from '../Model/category';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute,Route,Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  productsList:any;
  categoryList:any;
  idValue:any;
  firstCategory:any;

  constructor(private productServ:ProductService,
    private categoryServ:CategoryService,
    private aroute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.getAllCategories();
    this.idValue=this.aroute.snapshot.params['id'];
    console.log(this.idValue);
    if(this.idValue!=null)
    {
      this.productsList=this.productServ.getAllProducts().subscribe(data=>{
        this.productsList=data;
        console.log(data);
      })

     
    }
    else
    { this.productsList=this.getAllProductsByCategory(this.idValue);      
          }
  }
  showProductsByCategory(categoryId:number)
  {

  }

  getAllCategories()
  {
    this.categoryServ.getAllCategories().subscribe((data:any)=>{
      this.categoryList=data;
      console.log(data);
      console.log(this.categoryList);
    });
    this.idValue=this.categoryList[0].id;
  }

  getAllProductsByCategory(categoryId:number)
  {
    this.idValue= this.aroute.snapshot.params['id'];
    this.productsList=this.categoryServ.getProductsByCategory(this.idValue).subscribe(data=>{
      this.productsList=data;
      console.log(data);
    });
    /*
      this.productServ.getAllProducts().subscribe(data=>{
        this.productsList=data;
        console.log(data);
      })
      */
  }

 

}

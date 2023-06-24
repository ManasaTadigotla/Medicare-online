import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categoryList:any;
  topProducts!:any;
  noOfTopProducts:number=3;
  constructor(private productServ:ProductService,
    private categoryServ:CategoryService
    ){}

  ngOnInit(): void {
    this.getAllCategories();
    this.getTopProducts();
  }

  getAllCategories()
  {
    this.categoryServ.getAllCategories().subscribe((data:any)=>{
      this.categoryList=data;
      console.log(data);
      console.log(this.categoryList);
    });
  }

  getTopProducts(){
    this.productServ.getTopProducts(this.noOfTopProducts).subscribe(data=>
      {
        this.topProducts=data;
        console.log(data);
        console.log(this.topProducts);
      })

  }

  


}

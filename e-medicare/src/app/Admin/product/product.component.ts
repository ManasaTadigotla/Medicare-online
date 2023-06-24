import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList!:Product[];
  productName!:string;
  constructor(
    private productServ:ProductService
  ){}
  ngOnInit(): void {
    this.ShowAllProducts();
  }
  
ShowAllProducts()
{
  this.productServ.getAllProducts().subscribe(data=>{
    this.productList=data;
    console.log(this.productList);
  }) 
}
searchProducts()
{
  if(this.productName=="")
  {
    this.ShowAllProducts();
  }else
  {
    console.log(this.productList);
    this.productList=this.productList.filter(prod=>{
      return prod.name.toLocaleLowerCase().match(this.productName);
      console.log(this.productList);
    });
  }
}
deleteProduct(id:number)
{
  if(confirm("do u want to delete the product?"))
  {
  this.productServ.deleteProduct(id).subscribe(response=>{
    if(response==1)
    {
      alert("Deleted successfully");
    }
  }) 
}
}

}

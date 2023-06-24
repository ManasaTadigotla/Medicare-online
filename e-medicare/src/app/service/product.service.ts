import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string="http://localhost:8188/products";
  apiUrlTop:string="http://localhost:8188/topproducts";

  constructor(private http:HttpClient,
   private categoryServ:CategoryService) { }

  getTopProducts(noOfProducts:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.apiUrlTop}/${noOfProducts}`);
  }
getProductById(id:number):Observable<Product>
{
  return this.http.get<Product>(`${this.apiUrl}/${id}`);
}

getAllProducts():Observable<any>
{
  return this.http.get<any>(`${this.apiUrl}`);
}
addNewProduct(categoryId:number, product:Product):Observable<Product>
{
  
  return this.http.post<Product>("http://localhost:8188/category/addproduct/"+categoryId,product);
}
updateProductById(product:any):Observable<any>
{
  return this.http.put("http://localhost:8188/product/update",product);
}
deleteProduct(productId:number):Observable<any>
{
  return this.http.delete("http://localhost:8188/product/delete/"+productId);
}

}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl:string="http://localhost:8188/categories";
  apiUrlcategory:string="http://localhost:8188/productsbycategory";
  //apiUrl:string="https://dummyjson.com/products";

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getProductsByCategory(id:number):Observable<any>
  {
    return this.http.get<any>(`${this.apiUrlcategory}/${id}`);
  }
 addNewCategory(category:Category):Observable<any>
 {
  return this.http.post("http://localhost:8188/category/add",category);
 }
 updateCategory(category:Category):Observable<any>
 {

    return this.http.put("http://localhost:8188/category/update",category);
 }
 deleteCategory(id:number):Observable<any>
 {
  return this.http.delete("http://localhost:8188/category/delete/" + id);
 }

}

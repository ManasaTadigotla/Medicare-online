import { Component, OnInit } from '@angular/core';
import{FormsModule,NgModel} from '@angular/forms';
import { Category } from 'src/app/Model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryName:string="";
  categoryDesc:string="";
  categoryList:any;
  isEdited:boolean=false;
  category: Category = new Category;
  msg:string="";
  categoryId!: number;
  constructor(
    private categoryServ:CategoryService
  ){}
  ngOnInit(): void {
    this.getAllCategories();
  }

  addNewCategory(form:any)
  {
    
    if(form.valid)
    {      
      this.category.name=this.categoryName;
      this.category.description=this.categoryDesc;
     // alert(this.category.description);
     // alert(this.categoryName);
      this.categoryServ.addNewCategory(this.category).subscribe(data=>{
        if(data!=null)
        {
          this.msg="Added Successfully";
        }
        else
        {
          this.msg="Sorry Category is not added!!"
        }
      })
      //console.log(form);
      // this.categoryServ.addNewCategory(form);
   
  }
  }

  getAllCategories()
  {
    this.categoryServ.getAllCategories().subscribe(data=>{
      this.categoryList=data;
    })
  }

  onEditCategory(id:number,name:string,desc:string)
  {
    this.isEdited=true;
    this.categoryId=id;
    this.categoryName=name;
    this.categoryDesc=desc;

  }
  saveCategory()
  {
    this.category.id=this.categoryId;
    this.category.name=this.categoryName;
    this.category.description=this.categoryDesc;
    this.categoryServ.updateCategory(this.category).subscribe(data=>{
      console.log(data);
      if(data==1)
      {
      this.msg="Details updated successfully.."
      this.getAllCategories();
      this.isEdited=false;
      }
      else{
        this.msg="OOPs!!Something went wrong";
      }
     // alert(data);
    })
  
  }
  deleteCategory(id:number)
  {
    this.categoryServ.deleteCategory(id).subscribe(data=>{
      if(data==1)
      {
        alert("Category is deleted successfully");
        this.getAllCategories();
      }
      else
      {
        alert("OOPs!!Something went wrong");
      }
    });
  }

}

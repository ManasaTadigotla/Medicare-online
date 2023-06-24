import { Category } from "./category";

export class Product {
     code!:number;
	 name!: string;
	description!: string;
	category_id!:number;
	category!:Category;
	 brand!: string;
	 price!: number;
	availableQuantity!: string;
	 requiredQuantity:number=0;
	 image!: string;
	 isAddedToCart:boolean=false;
	 isActive!: boolean;
	rating!: number;
	
}

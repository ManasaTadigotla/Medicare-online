//import { CartItem } from "../cart-item";
import { CartItem } from "./cart-item";
import { Product } from "./product";
import { User } from "./user";

export class Cart {
     items:CartItem[]=[];
     product: Product = new Product;
     user: User = new User;
    //private itemPrice!:number;

     cartValue!:number;

    public addItem(item:CartItem)
    {
        this.items.push(item);
    }
    public cartCount():number
    {
        return this.items.length;
    }
    
}

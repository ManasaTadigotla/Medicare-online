import { Component, OnInit } from '@angular/core';
import { Offers } from '../offers';
import { Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers:any;

  constructor(private router:Router){}

ngOnInit(): void {
 this.offers =this.getAllOffers();
 console.log(this.offers);
}


getAllOffers():any{
  return[
    {name:"glucometer50Percent",imageUrl:"assets\\images\\cipla.jpg"},
    {name:"babyProducts",imageUrl:"assets\\images\\images.jpg"},
    {name:"babyProducts",imageUrl:"assets\\images\\diaper.jpg"}
  ]
}

onSelectOffer(){
this.router.navigateByUrl('user-home');
}





  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  totalAmount!:number;
  paymentMethods:any;
  isPaid:boolean=false;
  paymentpage:boolean=true;
  constructor(private aroute:ActivatedRoute){}

  ngOnInit(): void {
    this.totalAmount= this.aroute.snapshot.params['amount'];
    this.paymentMethods=["debit card","credit card","netbanking","Cod"];

  }

  gotoConfirmation()
  {
    this.isPaid=true;
    this.paymentpage=false;
  }

}

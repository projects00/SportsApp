import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../model/Banner';
import { city } from '../model/city';
import { quotes } from '../model/quotes';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
booking:any=[];
bookingSlots:any=[];
total:number=0;
RewardPoint:number=0;
Rewardused:number=0;
Coupon:number=0;
filterargs = { cost: 0 };
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    debugger;
    this.booking=this.adminService.booking;
            this.bookingSlots=this.adminService.bookingSlots;

     for(let bk of this.booking){
           this.total=this.total+bk.amount;
         
      }

      this.getReward();
      this.getCoupon();
  }

  getReward(){
     this.adminService.getReward("1").subscribe(
      (respose) => {
        debugger;
       this.RewardPoint=respose.balance;
       this.Rewardused=respose.used;
      },
      (error) => {
        console.log(error.json());
      }

    );
  }

    getCoupon(){
     this.adminService.getReward("FTS10").subscribe(
      (respose) => {
        debugger;
       this.Coupon=respose.amt;
     
      },
      (error) => {
        console.log(error.json());
      }

    );
  }
}

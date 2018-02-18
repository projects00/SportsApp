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
RewardDiscount:number=0;
CouponCode:String;
filterargs = { cost: 0 };
totalDiscount:number=0;
balance:number=0;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    debugger;
    this.booking=this.adminService.booking;
            this.bookingSlots=this.adminService.bookingSlots;

     for(let bk of this.booking){
           this.total=this.total+bk.amount;
         
      }

      this.getReward();
     
  }

  getReward(){
     this.adminService.getReward("1").subscribe(
      (respose) => {
        debugger;
      
       this.RewardPoint=respose[0].balance;
       this.Rewardused=respose[0].used;
      },
      (error) => {
        console.log(error.json());
      }

    );
  }

   rewardchange(newValue){
      this.totalDiscount=this.Coupon+ this.RewardDiscount;
       this.balance=this.total-this.totalDiscount;
    debugger;
    }
  couponchange(newValue){
     this.getCoupon("FTS10");
   }
  payment(){
     var dd=this.RewardDiscount;
    var dfsd=this.CouponCode;
  }

    getCoupon(coupon){
     this.adminService.getCoupon(coupon).subscribe(
      (respose) => {
        debugger;
       this.Coupon=respose[0].amt;
     this.totalDiscount=this.Coupon+ Number(this.RewardDiscount);
     this.balance=this.total-this.totalDiscount;
      },
      (error) => {
        console.log(error.json());
      }

    );
  }
}

import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Banner } from '../model/Banner';
import { city } from '../model/city';
import { quotes } from '../model/quotes';
import { AdminService } from '../service/admin.service';
import { cart } from '../model/cart';
import { booking } from '../model/booking';
import { Router } from '@angular/router';
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
randomNumber:number=0;
  constructor(private adminService: AdminService,private router: Router ) {
    this.randomNumber=Math.floor(Math.random() * (100 - 10 + 1)) + 10;

   }

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


    saveBooking() {

    for (let bk of this.booking) {
      for (let slt of bk.slot) {
        if (slt.selected == true) {
          const _cart = new booking();
          _cart.slotid = slt.slotid;
          _cart.courtid = bk.courtid;
          _cart.custid = 1;//bk.custid;
          _cart.reward = this.RewardDiscount;
          _cart.couponcode=this.CouponCode;
          _cart.couponamt=this.Coupon;
          _cart.totalamount=this.total;
          _cart.transactionid=slt.transactionid;
          this.adminService.saveBooking(_cart).subscribe(
            (respose) => {
              console.log(respose);
            });
        }
      }

    }
alert("saved");

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
    this.saveBooking();
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

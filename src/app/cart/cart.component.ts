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
total:number=0;
filterargs = { amount: 0 };
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.booking=this.adminService.booking;
     for(let bk of this.booking){
           this.total=this.total+bk.amount;
         
      }
  }

}

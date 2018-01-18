import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../model/Banner';
import { city } from '../model/city';
import { quotes } from '../model/quotes';
import { court } from '../model/court';
import { slot } from '../model/slot';

import { AdminService } from '../service/admin.service';

declare var $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  items: any;
  filterargs = { week: '0' };

  constructor(private router: Router, private adminService: AdminService) {
    // this.booking = [{ id: 1, courtname: "court1",week:'1', slot: [{ id: 2, timing: "8am - 2pm", selected: false }, { id: 3, timing: "5pm - 9pm", selected: false }, { id: 3, timing: "9pm-12am", selected: false }], amount: 0 }, { id: 1, courtname: "court2",week:'2', slot: [{ id: 4, timing: "10am - 11pm", selected: false }], amount: 0 }];

    //   this.items = [{title: 'hello world',week:'1'}, {title: 'hello kitty',week:'2'}, {title: 'foo bar',week:'3'}];
    this.getBookingDetails("0", "1", this.adminService.selectedArenaId.toString());
    this.getBookingDetails("1", "1", this.adminService.selectedArenaId.toString());
    this.getBookingDetails("2", "1", this.adminService.selectedArenaId.toString());
    this.getBookingDetails("3", "1", this.adminService.selectedArenaId.toString());
    this.getBookingDetails("4", "1", this.adminService.selectedArenaId.toString());
    this.getBookingDetails("5", "1", this.adminService.selectedArenaId.toString());
    this.getBookingDetails("6", "1", this.adminService.selectedArenaId.toString());

  }
  booking: any;
  arenaname: String;
  subtotal:Number=0;
  court: any;
  total: Number = 0;
  //items = [{title: 'hello world',tt:'1'}, {title: 'hello kitty',tt:'2'}, {title: 'foo bar',tt:'3'}];
  ngOnInit() {
    debugger;
    this.arenaname = this.adminService.selectedArenaName;
    this.court = [{ id: 1, courname: "court1", slot: [] }, { id: 2, courtname: "court2", slot: [] }];
    //  this.booking = [{ id: 1, courtname: "court1", slot: [{ id: 2, timing: "8am - 2pm", selected: false }, { id: 3, timing: "5pm - 9pm", selected: false }, { id: 3, timing: "9pm-12am", selected: false }], amount: 0 }, { id: 1, courtname: "court2", slot: [{ id: 4, timing: "10am - 11pm", selected: false }], amount: 0 }];

    //  this.getBookingDetails("0","1",this.adminService.selectedArenaId.toString());

  }


  getBookingDetails(wk: String, courtid: String, arenaid: String) {
    debugger;
    this.booking = [];
    this.adminService.getCourt(this.adminService.selectedArenaId.toString()).subscribe(data => {
      data.forEach(element => {
        const _court = new court();
        _court.id = element.courtid;
        _court.courtname = element.courtname;
        _court.slot = [];
        _court.amount = 0;
        _court.week = wk;
        console.log(_court);
        this.adminService.getBookingDetails(wk, element.courtid, this.adminService.selectedArenaId.toString()).subscribe(data => {
          data.forEach(element1 => {
            const _slot = new slot();
            _slot.id = element1.vwslotid;
            _slot.timing = element1.timing;
            _slot.selected = (element1.slot==0?true:false);
            _slot.cost = 5000;
            _slot.slot=element1.slot;
            _court.slot.push(_slot);

          });
        }, error => {
          return null

        });
        this.booking.push(_court);
      });
    }, error => {
      return null

    });



  }
  showcart() {
    if (this.total > 0) {
      this.adminService.booking = this.booking;
      this.router.navigateByUrl('/user/cart');
    }
    else
      alert("Invalid Selection");
  }

  getweekday(wk){
    var weekday;
  switch (wk) {
    case "0":
     weekday="THU";
      break;
    case "blue":
       weekday="FRI";
      break;
    case "indigo":
      weekday="SAT";
      break;
    case "purple":
       weekday="SUN";
      break;
    case "orange":
      weekday="MON";
      break;
    
  }
    return weekday;
  }
  getSlot(wk) {
    this.subtotal=0;
    this.filterargs = { week: wk };
    for (let bk of this.booking) {
      if (bk.week==wk)
      this.subtotal = this.subtotal + bk.amount;

    }
    //this.getBookingDetails(wk,"1",this.adminService.selectedArenaId.toString());
  }

  slotSelection(e) {
    var amount = 0;
    this.total = 0;
    for (let slt of e.slot) {
      if (slt.selected == true) {
        this.subtotal = this.subtotal + slt.cost;
        amount=amount+ slt.cost;
      }
    }
    e.amount = amount;

    for (let bk of this.booking) {
      this.total = this.total + bk.amount;

    }
  }
}

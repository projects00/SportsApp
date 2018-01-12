import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../model/Banner';
import { city } from '../model/city';
import { quotes } from '../model/quotes';
import { AdminService } from '../service/admin.service';

declare var $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor( private router: Router) { }
  booking:any;
  ngOnInit() {
     this.booking = [{ id: 1, courtname: "court1",slot:["8am - 2pm","5pm - 9pm","9pm-12am"] }, { id: 1, courtname: "court2",slot:["10am - 11pm"] }];
  }

  showcart(){
       this.router.navigateByUrl('/user/cart');
  }

}

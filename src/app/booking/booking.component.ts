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
     this.booking = [{ id: 1, courtname: "court1",slot:["8-9","9 - 10","11-12"] }, { id: 1, courtname: "court1",slot:["10-11"] }];
  }

  showcart(){
       this.router.navigateByUrl('/user/cart');
  }

}

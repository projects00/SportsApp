import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { booking } from '../model/booking';
@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
@Output() fileUploaded = new EventEmitter<boolean>();
slides:any=[];
  constructor(private router: Router,private adminService: AdminService) { 
     this.getOrderHistory();
  }

  ngOnInit() {
   
  }

   getOrderHistory() {
    this.slides = [];
    debugger;
    this.adminService.getOrderHistory().subscribe(
      (respose) => {
        respose.forEach(element => {
          const slide = new booking();
          slide.id = element.id;
          slide.transactionid = element.TransactionID;
          slide.reward = element.reward;
          slide.couponcode = element.couponcode;
          slide.couponamt = element.couponamt;
          slide.totalamount = element.totalamount;
          slide.bookingdate=new Date(element.bookingdate);
          this.slides.push(slide);
        });
      },
      (error) => {
        console.log(error.json());
      }

    );
  }

}

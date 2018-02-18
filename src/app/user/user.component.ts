import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   logbtn:boolean=false;
  constructor(private router:Router,private adminService: AdminService) {
 this.logbtn=this.adminService.isAuthenticated;

   }


    onClick(): void {
    this.router.navigateByUrl('/login');
 
  }
       logout(){
         this.adminService.logOut().subscribe(data => {
        this.adminService.isAuthenticated = false;
      this.adminService.logbtn=false;
       this.logbtn=this.adminService.isAuthenticated;
    }, error => {
      return null

    });
  }

    orderHistory(){
    debugger;
    this.router.navigateByUrl('/user/order');
  }
  
 couponDetail(){
   debugger;
    this.router.navigateByUrl('/user/coupon');
  }
   rewardDetail(){
     debugger;
    this.router.navigateByUrl('/user/reward');
  }
  ngOnInit() {
 //   this.router.navigateByUrl("user/sportsarena");
  }

}

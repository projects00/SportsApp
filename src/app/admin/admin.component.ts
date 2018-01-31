import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 logbtn:boolean=false;
  constructor(private router:Router,private adminService: AdminService) {
       this.logbtn=this.adminService.isAuthenticated;
  }

  ngOnInit() {
    this.router.navigateByUrl("admin/dashboard");
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

   onClick(): void {
  // this.router.navigateByUrl('/admindash');
   
}
}

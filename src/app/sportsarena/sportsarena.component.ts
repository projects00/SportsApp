import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sportsarena',
  templateUrl: './sportsarena.component.html',
  styleUrls: ['./sportsarena.component.css']
})
export class SportsarenaComponent implements OnInit {
sportsarena:any=[];
SelectedCityName:String;
SelectedSportsName:String;
  constructor(private adminService: AdminService, private router: Router) {
    this.SelectedCityName=adminService.selectedCityName;
    this.SelectedSportsName=adminService.selectedSportsName;
   }

  ngOnInit() {
    this.sportsarena=this.adminService.getArena();
  }

  booknow(){
    this.router.navigateByUrl('/user/booking');

  }
}

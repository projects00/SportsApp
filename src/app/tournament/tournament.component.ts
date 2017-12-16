import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Tournament } from '../model/tournament';

import 'rxjs/Rx';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  trounnament:any=[];
  public loading = false;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getTournament();
  }


  getTournament() {
   this.loading = true;
    this.adminService.getTournament().subscribe(
      (respose) => {
        respose.forEach(element => {
         const tour = new Tournament();
        tour.id=element.id;
        tour.name=element.tournament_name;
        tour.category=element.category;
        tour.customField2=element.custom_field_value_2;
        tour.customField1=element.custom_field_value_1;
        tour.type=element.tournament_type;
        tour.city=element.city;
        this.trounnament.push(tour);
        });
      this.loading = false;
      },
      (error) => {
        console.log(error.json());
      }

    );
  }
  adminSave() {
    alert("test");
  }

}

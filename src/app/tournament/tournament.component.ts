import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Tournament } from '../model/tournament';
import { NgForm } from '@angular/forms';
declare var $ :any;


import 'rxjs/Rx';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  trounnament: any = [];
  public loading = false;
  constructor(private adminService: AdminService, private router: Router) { }
  defaultType = 1;
  defaultCategory = "General";
  ngOnInit() {
    this.getTournament();
  }

 
  getTournament() {
    this.loading = true;
    this.adminService.getTournament().subscribe(
      (respose) => {
        respose.forEach(element => {
          const tour = new Tournament();
          tour.id = element.id;
          tour.name = element.name;
          tour.category = element.category;
          tour.customvalue2 = element.customvalue2;
          tour.customvalue1 = element.customvalue1;
          tour.type = element.type;
          tour.city = element.city;
          this.trounnament.push(tour);
        });
        this.loading = false;
      },
      (error) => {
        console.log(error.json());
      }

    );
  }
  adminSave(form: NgForm) {
    console.log(form.value.tor);
    debugger;
    const tour = new Tournament();
    tour.name = form.value.tornamentName;
    tour.category = form.value.inlineRadioOptions;
    tour.customvalue2 = form.value.customField2;
    tour.customvalue1 = form.value.customField1;
    tour.type = form.value.tornamentType;
    tour.city = form.value.tornamentCity;
    this.adminService.saveTournament(tour).subscribe(
      (respose) => {
        console.log(respose);
          $("#AddTournament").modal("toggle");
           this.getTournament();
           form.resetForm();
         form.controls['tornamentType'].setValue(1);
    //   form.setValue({"tornamentName":" ","tornamentCity":" ","tornamentType":1,"inlineRadioOptions":" ","customField1":" ","customField2":" "});
      });
    
  }

}

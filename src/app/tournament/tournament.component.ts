import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Tournament } from '../model/tournament';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;


import 'rxjs/Rx';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  trounnament: any = [];
  rForm: FormGroup;
  eForm:FormGroup;
  public loading = false;
  fb1: FormBuilder;
  constructor(private adminService: AdminService, private router: Router, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();
  }
   ngOnInit() {
    this.getTournament();
  }

  initilizeFrom() {
    this.rForm = this.fb1.group({
      'tornamentName': [null, Validators.required],
      'tornamentType': [null, Validators.required],
      'tornamentCity': [null, Validators.required],
      'inlineRadioOptions': ["General", Validators.required],
      'customField1': [],
      'customField2': []

    });
       this.eForm = this.fb1.group({
      'etornamentName': ["", Validators.required],
      'etornamentType': [null, Validators.required],
      'etornamentCity': [null, Validators.required],
      'einlineRadioOptions': ["General", Validators.required],
      'ecustomField1': [],
      'ecustomField2': []

    });
  }
  editForm(tour){
 this.eForm.controls['etornamentName'].setValue(tour.name);
 this.eForm.controls['etornamentType'].setValue(tour.type);
this.eForm.controls['etornamentCity'].setValue(tour.city);
this.eForm.controls['einlineRadioOptions'].setValue(tour.category);



  }
  getTournament() {
    this.loading = true;
    this.trounnament = [];
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
  adminSave() {
    debugger;
    const tour = new Tournament();
    tour.name = this.rForm.value.tornamentName;
    tour.category = this.rForm.value.inlineRadioOptions;
    tour.customvalue2 = this.rForm.value.customField2;
    tour.customvalue1 = this.rForm.value.customField1;
    tour.type = this.rForm.value.tornamentType;
    tour.city = this.rForm.value.tornamentCity;

    this.adminService.saveTournament(tour).subscribe(
      (respose) => {
        console.log(respose);
        this.initilizeFrom();
        $("#AddTournament").modal("toggle");
        this.getTournament();
      });

  }

}

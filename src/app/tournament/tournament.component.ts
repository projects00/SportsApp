import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Tournament } from '../model/tournament';
import { City } from '../model/city';
import { Type } from '../model/type';


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
  cities:any=[];
  types:any=[];
  rForm: FormGroup;
  eForm: FormGroup;
  cityMaster:any=[];
  dId:number;
  public loading = false;
  fb1: FormBuilder;
  constructor(private adminService: AdminService, private router: Router, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();
  }
  ngOnInit() {
  this.cities = [
     new City(1, 'Bangalore' ),
     new City(2, 'Coimbatore' ),
     new City(3, 'Erode' ),
     new City(4, 'Madurai')
  ];
      this.types = [
     new Type(1, 'Tennis Ball' ),
     new Type(2, 'Leather Ball' )
  ];

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
  editForm(tour) {
       this.dId = tour.id;

    this.eForm.controls['etornamentName'].setValue(tour.name);
    this.eForm.controls['etornamentType'].setValue(2);
    this.eForm.controls['etornamentCity'].setValue(2);
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

  adminUpdate(){
     const tour = new Tournament();
    tour.name = this.eForm.value.etornamentName;
    tour.category = this.eForm.value.einlineRadioOptions;
    tour.type = this.eForm.value.etornamentType;
    tour.city = this.eForm.value.etornamentCity;
    tour.id=this.dId;
    this.adminService.updateTournament(tour).subscribe(
      (respose) => {
        console.log(respose);
        $("#EditTournament").modal("toggle");
        this.getTournament();
      });


  }

 deleteForm(id){
   this.dId = id
 } 


 delete(){
   this.adminService.deleteTournament(this.dId).subscribe(res=>{
    $("#DeleteTournament").modal("toggle");

     this.getTournament();
   })
 }
}

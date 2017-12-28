import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Quotes } from '../model/quotes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;


import 'rxjs/Rx';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: any = [];
  qForm: FormGroup;
  fb1: FormBuilder;
  constructor(private adminService: AdminService, private router: Router, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();

  }

  initilizeFrom() {
    this.qForm = this.fb1.group({
      'quoteName': [null, Validators.required],
      'isActive': [null, Validators.required]
    });
  }
  ngOnInit() {
  }

 
   quoteSave() {
    const quote = new Quotes();
       this.adminService.saveQuotes(quote).subscribe(
      (respose) => {
        console.log(respose);
        this.initilizeFrom();
        $("#AddTournament").modal("toggle");
    //    this.getQuotes();
      });

  }
}

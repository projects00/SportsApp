import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { quotes } from '../model/quotes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;


import 'rxjs/Rx';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  _quotes: any = [];
   dId: number;

  qForm: FormGroup;
  equotesForm:FormGroup;
  fb1: FormBuilder;
  constructor(private adminService: AdminService, private router: Router, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();

  }

    deleteForm(id) {
    this.dId = id
  }

  initilizeFrom() {
    this.qForm = this.fb1.group({
      'quoteName': [null, Validators.required],
      'quoteAuthor': [null, Validators.required]
    });

        this.equotesForm = this.fb1.group({
      'equoteName': ["", Validators.required],
      'equoteAuthor': [null, Validators.required]
     

    });
    this.getQuotes();
  }

    delete() {
    this.adminService.deleteQuotes(this.dId).subscribe(res => {
      $("#DeleteQuotes").modal("toggle");

      this.getQuotes();
    })
  }
  ngOnInit() {
  }

   editQuoteForm(quote) {
     debugger;
    this.dId = quote.id;
    this.equotesForm.controls['equoteName'].setValue(quote.QUOTE);
    this.equotesForm.controls['equoteAuthor'].setValue(quote.author);



  }

  getQuotes() {
    debugger
      this._quotes = [];
    this.adminService.getQuotes().subscribe(
      (respose) => {
        console.log(respose)
        respose.forEach(element => {
          const quote = new quotes();
          quote.QUOTE = element.QUOTE;
          quote.author = element.author;
          quote.id=element.id;
          this._quotes.push(quote);
        });
      }
      ,
      (error) => {
        console.log(error.json());
      }
    );

  }

  quoteSave() {
    debugger
    const quote = new quotes();
      quote.author=this.qForm.value.quoteAuthor;
     quote.QUOTE=this.qForm.value.quoteName;

    this.adminService.saveQuotes(quote).subscribe(
      (respose) => {
        console.log(respose);
        this.initilizeFrom();
            $("#AddQuotes").modal("toggle");
         
      });

  }

  quoteUpdate() {
    const quote = new quotes();
    quote.id=this.dId;
    quote.author=this.equotesForm.value.equoteAuthor;
     quote.QUOTE=this.equotesForm.value.equoteName;
    this.adminService.updateQuotes(quote).subscribe(
      (respose) => {
        console.log(respose);
        this.initilizeFrom();
        $("#EditQuotes").modal("toggle");
           
      });

  }
}

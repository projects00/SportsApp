import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Quotes } from '../model/quotes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

   quote: any = [];
  bForm: FormGroup;
  fb1: FormBuilder;
  constructor(private adminService: AdminService, private router: Router, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();

  }
  initilizeFrom() {
    this.bForm = this.fb1.group({
      'bannerTitle': [null, Validators.required],
      'bannerDescription': [null, Validators.required],
       'bannerImage': [null, Validators.required],
       'bannerIsActive': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

}

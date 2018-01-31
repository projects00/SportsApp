import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { quotes } from '../model/quotes';
import { Banner } from '../model/Banner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  insertid: number;
  dId: number;
  imagePath: any;
  _banner: any;
  file: File;
  quote: any = [];
  BForm: FormGroup;
  EBForm: FormGroup;
  fb1: FormBuilder;
  constructor(private adminService: AdminService, private router: Router, fb: FormBuilder) {
    this.fb1 = fb;
    this.initilizeFrom();
    this.getBanner();
  }
  initilizeFrom() {
    this.BForm = this.fb1.group({
      'bannerTitle': [null, Validators.required],
      'bannerDescription': [null, Validators.required],
      'bannerIsActive': [null, Validators.required],
      'bannerImage': [null],
    });
    this.EBForm = this.fb1.group({
      'ebannerTitle': ["", Validators.required],
      'ebannerDescription': [null, Validators.required],
      'ebannerIsActive': [null, Validators.required],
      'ebannerImage': [null],
      'ebannerImageid':[null]

    });
  }
  createImageFromBlob(image: Blob, slide: any) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      if (slide == null) {
        this.imagePath = reader.result;
      }
      else
        slide.image = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  editBanner(banner) {
    this.dId=banner.id;
    this.EBForm.controls['ebannerTitle'].setValue(banner.title);
    this.EBForm.controls['ebannerDescription'].setValue(banner.description);
    this.EBForm.controls['ebannerIsActive'].setValue(banner.isactive);
    this.EBForm.controls['ebannerImageid'].setValue(banner.imageid);
    this.getImage(banner.imageid,null);
  }

  getImage(id: string, slide: any) {
    this.adminService.getImage(id).subscribe(data => {
      let reader = new FileReader();
      this.createImageFromBlob(data, slide);
    }, error => {
      return null

    });
  }
  deleteForm(id) {
    this.dId = id
  }

  
  delete() {
    this.adminService.deleteBanner(this.dId.toString()).subscribe(res => {
      this.getBanner();
        $("#DeleteBanner").modal("toggle");
      if (res.message == 0) {
        alert('Invalid delete');
      }
    }
      ,
      (error) => {
        console.log(error.json());
      })
  }
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.imagePath = reader.result;
      };
    }
  }

  saveBanner() {
     this.adminService.saveImage(this.file).subscribe(
      (respose) => {
        console.log(respose);
        this.insertid = respose.result.insertId;
        const slide = new Banner();
        slide.title = this.BForm.value.bannerTitle;
        slide.description = this.BForm.value.bannerDescription;
        slide.imageid = this.insertid;
      //  this.getImage("16", slide);
        this.adminService.saveBanner(slide).subscribe(
          (respose) => {
            console.log(respose);
            this.initilizeFrom();
             this.getBanner();
               $("#AddBanner").modal("toggle");
          });

      });
      }


  updateBanner() {
    if (this.file)
      {
     this.adminService.saveImage(this.file).subscribe(
      (respose) => {
        console.log(respose);
        this.insertid = respose.result.insertId;
        const slide = new Banner();
        slide.title = this.EBForm.value.ebannerTitle;
        slide.description = this.EBForm.value.ebannerDescription;
        slide.isactive = this.EBForm.value.ebannerIsActive;
        slide.imageid = this.insertid;
        slide.id=this.dId;
       // this.getImage("16", slide);
           this.adminService.updateBanner(slide).subscribe(
          (respose) => {
            console.log(respose);
            this.initilizeFrom();
             this.getBanner();
               $("#EditBanner").modal("toggle");
          });

      });
      }
      else
      { 
         const slide = new Banner();
        slide.title = this.EBForm.value.ebannerTitle;
        slide.description = this.EBForm.value.ebannerDescription;
         slide.imageid = this.EBForm.value.ebannerImageid;
         slide.isactive = this.EBForm.value.ebannerIsActive;
          slide.id=this.dId;
        this.adminService.updateBanner(slide).subscribe(
          (respose) => {
            console.log(respose);
            this.initilizeFrom();
             this.getBanner();
               $("#EditBanner").modal("toggle");
          });
        }

      }
  ngOnInit() {
  }
  getBanner() {
    this._banner = [];
    this.adminService.getBanner().subscribe(
      (respose) => {
        respose.forEach(element => {
          const slide = new Banner();
           slide.id = element.id;
          slide.title = element.title;
          slide.description = element.description;
          slide.imageid = element.imgageid;
          this.getImage(element.imgageid, slide);
          this._banner.push(slide);
        });
      },
      (error) => {
        console.log(error.json());
      }

    );
  }

}

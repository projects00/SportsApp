import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../model/Banner';
import { city } from '../model/city';
import { quotes } from '../model/quotes';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
slides:any;
cities:any;
qutoes:any;
imagePath:any;
   
  constructor(private adminService: AdminService,private router: Router) {
 

 const ban= new Banner();
 //ban.title="sdf";
 //ban.description="sdfsdf sdfsdf sdf sdfsdfds ds fdsf ";



 this.getActiveBanner();
 
 
     this.getLatestQuotes();
     
    
   }

  onClick(): void {
    this.router.navigateByUrl('/login')

  }
    ngOnInit() {
     
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

    getImage(id: string, slide: any) {
    this.adminService.getImage(id).subscribe(data => {
      let reader = new FileReader();
      this.createImageFromBlob(data, slide);
    }, error => {
      return null

    });
  }
     getLatestQuotes() {
    this.qutoes = [];
    this.adminService.getLatestQuotes().subscribe(
      (respose) => {
        debugger;
        respose.forEach(element => {
          const slide = new quotes();
           slide.id = element.id;
          slide.author = element.author;
          slide.QUOTE = element.QUOTE;
          this.qutoes =slide;
             });
      },
      (error) => {
        console.log(error.json());
      }

    );
  }

       getActiveBanner() {
    this.slides = [];
    this.adminService.getActiveBanner().subscribe(
      (respose) => {
        debugger;
          respose.forEach(element => {
          const slide = new Banner();
           slide.id = element.id;
          slide.title = element.title;
          slide.description = element.description;
          slide.imageid = element.imgageid;
          this.getImage(element.imgageid, slide);
           this.slides.push(slide);
             });
      },
      (error) => {
        console.log(error.json());
      }

    );
  }

}

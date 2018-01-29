import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from '../model/Banner';
import { city } from '../model/city';
import { quotes } from '../model/quotes';
import { AdminService } from '../service/admin.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides: any;
  cities: any;
  sports: any;
    logbtn:boolean=false;
  ODsports: any;
  INsports: any;
  qutoes: any;

  explorecities: any;
  exploreSports: any;
  selectedCity: String;
  showCity: boolean;
  imagePath: any;
  constructor(private adminService: AdminService, private router: Router) {
    this.explorecities = [];
    this.exploreSports = [];
    this.cities = [];
    this.sports = [];
    this.ODsports = [];
    this.INsports = [];
    this.showCity = true;
    this.logbtn=adminService.logbtn;

    const ban = new Banner();
    //ban.title="sdf";
    //ban.description="sdfsdf sdfsdf sdf sdfsdfds ds fdsf ";
    this.explorecities = [{ name: "bgl", imgurl: "assets/images/Bgl.jpg" }, { name: "cbe", imgurl: "assets/images/psg.jpg" }];
    this.exploreSports = [{ name: "cricket", imgurl: "assets/images/cricket.jpg" }, { name: "football", imgurl: "assets/images/football.jpg" }];
    this.cities = [{ id: 31, name: "Coimbatore" }, { id: 28, name: "Bangalore" }];
    this.ODsports = [{ id: 1, name: "Cricket", typeid: 1, imgurl: "assets/images/icon-cricket-1.svg" }, { id: 2, name: "Football", typeid: 1, imgurl: "assets/images/icon-football.svg" }];
    this.INsports = [{ id: 1, name: "Table Tennis", typeid: 1, imgurl: "assets/images/icon-table-tennis.svg" }, { id: 1, name: "Badminton", typeid: 2, imgurl: "assets/images/icon-badmittan.svg" }];

    this.getActiveBanner();


    this.getLatestQuotes();

   this.isAuthenticated();

  }

  isAuthenticated(){
    debugger;
      this.adminService.isAuthenticatred().subscribe(data => {
      debugger;
      this.adminService.isAuthenticated = data;
       this.logbtn=this.adminService.logbtn;
    }, error => {
      return null

    });
  }

  onLogout(){
    this.logout();
  }
    logout(){
    debugger;
        this.adminService.logOut().subscribe(data => {
      debugger;
      this.adminService.isAuthenticated = false;
      this.adminService.logbtn=false;
       this.logbtn=this.adminService.logbtn;
    }, error => {
      return null

    });
  }
  cityClick(city): void {
    this.showCity = false;
    this.adminService.selectedCityId = city.id;
    this.adminService.selectedCityName = city.name;
    this.selectedCity = this.adminService.selectedCityName;
  }

  hideSports(): void {
    this.showCity = true;
  }
  sportsClick(sport): void {
    $("#PlaySports").modal("toggle");
    this.router.navigateByUrl('/user');
    this.adminService.selectedSportsId = sport.id;
     this.adminService.selectedSportsName = sport.name;

  }

  onClick(): void {
    this.router.navigateByUrl('/login');
 
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
          this.qutoes = slide;
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

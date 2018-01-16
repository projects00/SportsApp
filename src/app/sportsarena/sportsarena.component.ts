import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sportsarena',
  templateUrl: './sportsarena.component.html',
  styleUrls: ['./sportsarena.component.css']
})
export class SportsarenaComponent implements OnInit {
sportsarena:any=[];
SelectedCityName:String;
SelectedSportsName:String;

  constructor(private adminService: AdminService, private router: Router) {
    this.SelectedCityName=adminService.selectedCityName;
    this.SelectedSportsName=adminService.selectedSportsName;
   }

  ngOnInit() {
        this.adminService.getArena().subscribe(
      (respose) => {
        console.log(respose)
        var i:number=0;
        respose.forEach(element => {
          var ele=element;
          ele.imgurl=[];
          if(i==0)
           ele.imgurl.push("../assets/images/ground-01.jpg");
          else
              ele.imgurl.push("../assets/images/ground-02.jpg");
          this.sportsarena.push(element);
          i=i+1;
        });
      }
      ,
      (error) => {
        console.log(error.json());
      }
    );
  }

  booknow(arenaid,arenaName){
    this.adminService.selectedArenaId=arenaid;
     this.adminService.selectedArenaName=arenaName;
    this.router.navigateByUrl('/user/booking');

  }
}

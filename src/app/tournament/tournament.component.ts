import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getTournament();
  }


  getTournament() {
    this.adminService.getTournament().subscribe(
      (respose) => {
        debugger;
        console.log(respose )
      },
      (error) => {
        console.log(error.json());
      }

    );
  }
  adminSave() {
    alert("test");
  }

}

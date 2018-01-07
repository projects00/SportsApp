import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-sportsarena',
  templateUrl: './sportsarena.component.html',
  styleUrls: ['./sportsarena.component.css']
})
export class SportsarenaComponent implements OnInit {
sportsarena:any=[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.sportsarena=this.adminService.getArena();
  }

}

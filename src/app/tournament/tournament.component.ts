import { Component,  OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  adminSave() {
    }

}

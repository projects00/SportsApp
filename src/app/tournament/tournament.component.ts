import { Component,  OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  adminSave() {
    debugger;
  alert("admin save");
   }

}

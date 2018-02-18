import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
@Output() fileUploaded = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

 

}

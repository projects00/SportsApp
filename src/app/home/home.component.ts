import { Component,  OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private router:Router) { }

 onClick(): void {
   this.router.navigateByUrl('/login')
   
} 

}

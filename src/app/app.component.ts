import { Component,  OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router:Router) { }

ngOnInit() {
    this.router.navigateByUrl('/home')
}

   
}

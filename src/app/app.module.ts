import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { TournamentComponent } from './tournament/tournament.component';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HomeComponent } from './home/home.component';
const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'admin',
  component: AdminComponent,
  children : [
                { path: 'dashboard', component: AdmindashComponent },
                { path: 'tournament', component: TournamentComponent } 
                   ]
},
{
  path: 'home',
  component: HomeComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdmindashComponent,
    TournamentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [
    
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

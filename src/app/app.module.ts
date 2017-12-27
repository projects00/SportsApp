import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { TournamentComponent } from './tournament/tournament.component';
import { APP_BASE_HREF, Location } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AdminService } from './service/admin.service';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';
 
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
},
{
  path: 'trounamentdetail',
  component: TournamentDetailComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdmindashComponent,
    TournamentComponent,
    HomeComponent,
    TournamentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
         LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
        backdropBorderRadius: '6px',
        primaryColour: '#2a86a5', 
        secondaryColour: '#2a86a5', 
        tertiaryColour: '#2a86a5'
    })
   
  ],
  providers: [
    AdminService,
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { QuotesComponent } from './quotes/quotes.component';
import { BannerComponent } from './banner/banner.component';
import { OwlModule } from 'ng2-owl-carousel';
import { SportsarenaComponent } from './sportsarena/sportsarena.component';
import { UserComponent } from './user/user.component';
import { BookingComponent } from './booking/booking.component';
import { CartComponent } from './cart/cart.component';
import { WeekfilterPipe } from './weekfilter.pipe';
import { RemovezeroPipe } from './removezero.pipe';
import { UserLoginComponent } from './src/app/user-login/user-login.component';
import { UserRegComponent } from './src/app/user-reg/user-reg.component';
 
const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'admin',
  component: AdminComponent,
  children : [
                { path: 'dashboard', component: AdmindashComponent },
                { path: 'tournament', component: TournamentComponent} ,
                  { path: 'tournamentdetail', component: TournamentDetailComponent },
                   { path: 'quotes', component: QuotesComponent },
                     { path: 'banner', component: BannerComponent }
                   ]
},
                  {
  path: 'user',
  component: UserComponent,
  children : [
                { path: 'sportsarena', component: SportsarenaComponent },
                 { path: 'booking', component: BookingComponent },
                  { path: 'cart', component: CartComponent }
                   ]
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'user',
  component: UserComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdmindashComponent,
    TournamentComponent,
    HomeComponent,
    TournamentDetailComponent,
    QuotesComponent,
    BannerComponent,
    SportsarenaComponent,
    UserComponent,
    BookingComponent,
    CartComponent,
    WeekfilterPipe,
    RemovezeroPipe,
    UserLoginComponent,
    UserRegComponent
  ],
  imports: [
    OwlModule,
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

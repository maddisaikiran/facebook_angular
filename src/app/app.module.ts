import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminaccountComponent } from './components/admin/adminaccount/adminaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserStatusPipe } from './user-status.pipe';

import { AddtimelineComponent } from './addtimeline/addtimeline.component';
import { MytimelineComponent } from './components/user/mytimeline/mytimeline.component';
import { ViewtimelineComponent } from './components/user/viewtimeline/viewtimeline.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import * as Material from "@angular/material";
import { ProfilesComponent } from './profiles/profiles.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { HomeComponent } from './components/user/home/home.component';
import { FriendsComponent } from './components/user/friends/friends.component';
import { NetworkComponent } from './components/user/network/network.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PasswordComponent,
    ProfileComponent,
    AdminaccountComponent,
    AdminloginComponent,
    UserloginComponent,
    UserStatusPipe,
    NetworkComponent,
    FriendsComponent,
    AddtimelineComponent,
    MytimelineComponent,
    ViewtimelineComponent,
    LandingpageComponent,
    AdmindashboardComponent,
    ProfilesComponent,
    HeaderComponent,
    SidenavComponent,
    // MatFormFieldModule,
    // MatIconModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    CommonModule,
    Ng2SearchPipeModule,
    MaterialModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

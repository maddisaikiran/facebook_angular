import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtimelineComponent } from './addtimeline/addtimeline.component';
import { AdminaccountComponent } from './components/admin/adminaccount/adminaccount.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { FriendsComponent } from './components/user/friends/friends.component';
import { HomeComponent } from './components/user/home/home.component';

import { HeaderComponent } from './header/header.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { MytimelineComponent } from './components/user/mytimeline/mytimeline.component';

import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AuthGuard } from './shared/auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewtimelineComponent } from './components/user/viewtimeline/viewtimeline.component';
import { NetworkComponent } from './components/user/network/network.component';


const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo:"landingpage",
  },
  {
    path: "signup",
    component: SignupComponent
  },
  // {
  //   path: "profile",
  //   component: ProfileComponent
  // },
  {
    path: "adminaccount",
    component: AdminaccountComponent
  },
  {
    path: "adminlogin",
    component: AdminloginComponent
  },
  {
    path: "userlogin",
    component: UserloginComponent
  },
  {
    path: "landingpage",
    component: LandingpageComponent
  },
  {
    path:"admindashboard",
    component: AdmindashboardComponent
  },
  {
    path:"profiles",
    component: ProfilesComponent
  },
  {
    path:"sidenav",
    component: SidenavComponent
  },
  {
     path:"header",
     component: HeaderComponent
  },
  {
    path:"password",
    component: PasswordComponent,
    canActivate:[AuthGuard],
    children:[
      {
          path: "home",
          component: HomeComponent
      },
      {
        path:"network",
        component:NetworkComponent
      },
      {
        path:"friends",
        component:FriendsComponent
      },
      {
        path:"addtimeline",
        component:AddtimelineComponent
      },
      {
        path:"viewtimeline",
        component:ViewtimelineComponent
      },
      {
        path:"mytimeline",
        component:MytimelineComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

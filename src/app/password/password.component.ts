import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{

  sideBarOpen = true;
constructor(){}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
ngOnInit() {
}
}

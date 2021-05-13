import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  aboutBtnStyle: string;

  constructor(public auth: AuthService) { 
    this.aboutBtnStyle = 'about-btn-style';
  }

  ngOnInit(): void {
  }

  about(){
    console.log("about clicked on!")
  }
}

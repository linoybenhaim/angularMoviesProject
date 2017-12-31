import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public angularlogo = '../assets/angularlogo.png';
  public githublogo = '../assets/githublogo.png';
  constructor() { }

  ngOnInit() {
  }

}

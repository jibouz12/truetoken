import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Selected1!: boolean;
  Selected2!: boolean;
  Selected3!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.Selected1 = true;
    this.Selected2 = false;
    this.Selected3 = false;
  }

  onClick1() {
    this.Selected1 = true;
    this.Selected2 = false;
    this.Selected3 = false;
  }  

  onClick2() {
    this.Selected1 = false;
    this.Selected2 = true;
    this.Selected3 = false;
  }

  onClick3() {
    this.Selected1 = false;
    this.Selected2 = false;
    this.Selected3 = true;
  }

}

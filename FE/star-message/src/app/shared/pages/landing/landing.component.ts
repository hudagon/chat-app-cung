import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  temp: number = 0;

  ngOnInit(): void {
  }

  increase() {
    this.temp++;
  }

}

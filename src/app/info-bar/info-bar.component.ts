import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css'],
})
export class InfoBarComponent implements OnInit {
  public getScreenWidth: any;

  constructor() {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    console.log(this.getScreenWidth);
  }
  // ngOnChanges(): void {
  //   this.getScreenWidth = window.innerWidth;
  //   console.log(this.getScreenWidth);
  // }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  public enteredText!: string;

  // constructor(private dataService: DataService) { }
  constructor() {}

  ngOnInit(): void {}
  // onBtnClick() {
  //   console.log(this.enteredText);
  //   this.dataService.raiseDataEmitterEvent(this.enteredText)
  // }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private datService: DataService) { }
  ngOnInit(): void {
    this.datService.dataEmitter.subscribe((value) => {
      this.inputText = value;
    })
  }
  inputText: string | undefined;

}

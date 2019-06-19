import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  styleh1 = false;
  h2Style = false;
  h3Style = false;
  users  = {};
  constructor(private data: DataService) { }
  inputText: string;

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }
  );
  }
  // FirstClick() {
  //   this.data.serviceClick();
  //   this.styleh1 = !this.styleh1;
  //   this.h2Style = !this.h2Style;
  //   this.h3Style = !this.h3Style;
  // }
  // myMethod(data) {
  //   this.inputText = data.target.value;
  // }
}

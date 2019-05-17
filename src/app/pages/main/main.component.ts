import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public newCall = () => {
    alert("new Call")
;
  }

  public checkExistsCall = (callId : string) => {
    alert(callId);
  }
}

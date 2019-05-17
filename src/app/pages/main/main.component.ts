import { Component, OnInit } from '@angular/core';
import { CallStateService } from 'src/services/call-state/call-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private stateProvider : CallStateService, private router: Router) { }

  ngOnInit() {
  }

  public newCall = () => {
    this.router.navigate(['/problems-form']);
  };

  public checkExistsCall = (callId : string) => {
      const callState = this.stateProvider.get(callId).subscribe((data)=> {
        if (data){
        this.router.navigate(['/call-status'], { queryParams: { call: data } });
        }
      });
  };
}

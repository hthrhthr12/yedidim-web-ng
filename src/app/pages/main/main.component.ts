import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CallStateService} from '../../services/call-state/call-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private stateProvider: CallStateService, private router: Router) {
  }

  ngOnInit() {
  }

  public newCall = () => {
    this.router.navigate(['/problems-form']);
  };

  public checkExistsCall = (callId: string) => {
    const callState = this.stateProvider.get(callId).subscribe((data) => {
      if (data) {
        this.router.navigate(['/call-tracking'], {queryParams: {call: data}});
      }
    });
  };
}

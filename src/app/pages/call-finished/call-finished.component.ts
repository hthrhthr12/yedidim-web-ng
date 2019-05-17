import { Component, OnInit } from '@angular/core';
import { CallStateService } from 'src/services/call-state/call-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-finished',
  templateUrl: './call-finished.component.html',
  styleUrls: ['./call-finished.component.less']
})
export class CallFinishedComponent implements OnInit {

  constructor(private stateProvider : CallStateService, private router: Router) { }
  callId: string;

  ngOnInit() {
  }

  navigateToCall() {
    this.router.navigateByUrl(`/call-tracking/${this.callId}`);
  }
}

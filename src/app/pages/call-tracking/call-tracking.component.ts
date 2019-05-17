import { Component, OnInit } from '@angular/core';
import { CallStateService } from 'src/services/call-state/call-state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CallState } from 'src/types/callState';

@Component({
  selector: 'app-call-tracking',
  templateUrl: './call-tracking.component.html',
  styleUrls: ['./call-tracking.component.less']
})
export class CallTrackingComponent implements OnInit {

  public callId: string;
  public callState: CallState;

  constructor(private activatedRoute: ActivatedRoute,
    private callStateService: CallStateService) {
    this.activatedRoute.params.subscribe(params => {
      this.callId = params['callId'];
    })
  }

  ngOnInit() {
    this.load();
  }

  reload() {
    this.load();
  }

  private load() {
    this.callStateService.get(this.callId).subscribe(
      callState => { this.callState = callState }
    )        
  }

}

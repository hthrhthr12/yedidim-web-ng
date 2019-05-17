import { Component, OnInit } from '@angular/core';
import { CallStateService } from 'src/services/call-state/call-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-call-finished',
  templateUrl: './call-finished.component.html',
  styleUrls: ['./call-finished.component.scss']
})
export class CallFinishedComponent implements OnInit {

  callId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.callId = params['callId'];
    })
  }

  ngOnInit() {
  }

  navigateToCall() {
    this.router.navigateByUrl(`/call-tracking/${this.callId}`);
  }
}

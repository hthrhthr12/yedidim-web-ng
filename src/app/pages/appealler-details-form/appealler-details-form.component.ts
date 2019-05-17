import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/services/store/store.service';
import { CallDataService } from 'src/services/call-data/call-data.service';
import { store } from '@angular/core/src/render3';

@Component({
  selector: 'app-appealler-details-form',
  templateUrl: './appealler-details-form.component.html',
  styleUrls: ['./appealler-details-form.component.less']
})
export class AppeallerDetailsFormComponent implements OnInit {

  constructor(private router: Router,
    private store: StoreService,
    private callDataService: CallDataService) { }

  profileForm = new FormGroup({
    carType: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl('')
  });

  ngOnInit() {
  }

  continue() {
    console.log(this.profileForm.value);
    if (!this.profileForm.valid) {
      return;
    }

    
    this.store.setPartial({appeallerDetails: this.profileForm.value});
    this.callDataService.create(this.store.get()).subscribe(
      callId => {
        this.store.reset();
        this.router.navigateByUrl(`/call-finished/${callId}`);
      }
    );
  }
}

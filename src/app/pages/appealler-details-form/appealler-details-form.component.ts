import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {CallDataService} from '../../services/call-data/call-data.service';
import {StoreService} from '../../services/store/store.service';

@Component({
  selector: 'app-appealler-details-form',
  templateUrl: './appealler-details-form.component.html',
  styleUrls: ['./appealler-details-form.component.scss']
})
export class AppeallerDetailsFormComponent implements OnInit {

  constructor(private router: Router,
              private store: StoreService,
              private callDataService: CallDataService) {
  }

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

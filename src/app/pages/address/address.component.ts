import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICallData } from 'src/types/callData';
import { StoreService } from 'src/services/store/store.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  locationText: string;
  description: string;
  latitude: number;
  longitude: number;


  constructor(public router: Router, private storeService: StoreService) { }

  ngOnInit() {
    var callData = this.storeService.get();
    if(callData) {
      this.locationText = callData.address.locationText;
      this.description = callData.address.description;
      this.latitude = callData.address.coordinate ? callData.address.coordinate.lat : -1;
      this.longitude = callData.address.coordinate ? callData.address.coordinate.lon : -1;
  
    }
    if(this.latitude < 0 || this.longitude < 0) {
      this.setCurrentPosition();
    }
   
  


  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  edit() {
    this.storeService.setPartial({
      address: {
        description: this.description,
        locationText: this.locationText,
        coordinate: { lat: this.latitude, lon: this.longitude }
      }
    });
    this.router.navigate(['mapPicker']);
  }


  save() {
    this.storeService.setPartial({
      address: {
        description: this.description,
        locationText: this.locationText,
        coordinate: { lat: this.latitude, lon: this.longitude }
      }
    });
    this.router.navigate(['appealler-details-form']);
  }

}
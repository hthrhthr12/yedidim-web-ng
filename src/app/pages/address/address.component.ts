import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/services/store/store.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  description: string;
  latitude: number;
  longitude: number;


  constructor(public router: Router, private storeService: StoreService) { }

  ngOnInit() {
    var callData = this.storeService.get();
    if (callData && callData.address) {
      this.description = callData.address.description;
      this.latitude = callData.address.coordinate ? callData.address.coordinate.lat : -1;
      this.longitude = callData.address.coordinate ? callData.address.coordinate.lon : -1;

    }
    if (!callData || this.latitude < 0 || this.longitude < 0) {
      this.setCurrentPosition();
      this.getPlaceByCoordinate();
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
  getPlaceByCoordinate() {
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(this.latitude, this.longitude);
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          this.description = results[0].formatted_address;
        } else {

        }
      } else {

      }
    });
  }

  edit() {
    this.storeService.setPartial({
      address: {
        description: this.description,
        coordinate: { lat: this.latitude, lon: this.longitude }
      }
    });
    this.router.navigate(['mapPicker']);
  }


  save() {
    this.storeService.setPartial({
      address: {
        description: this.description,
        coordinate: { lat: this.latitude, lon: this.longitude }
      }
    });
    this.router.navigate(['appealler-details-form']);
  }



}

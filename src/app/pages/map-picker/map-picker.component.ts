import { Component, OnInit, NgZone, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { ICallData } from 'src/types/callData';
import { StoreService } from 'src/services/store/store.service';

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.css']
})
export class MapPickerComponent implements OnInit {
  locationText: string;
  description: string;
  latitude: number;
  longitude: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  @Output()
  setLocation = new EventEmitter<any>();


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public router: Router,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    var callData = this.storeService.get();
    if (callData) {
      this.locationText = callData.address.locationText;
      this.description = callData.address.description;
      this.latitude = callData.address.coordinate ? callData.address.coordinate.lat : 39.8282;
      this.longitude = callData.address.coordinate ? callData.address.coordinate.lon : -98.5795;

    }
    else {
      this.setCurrentPosition();
      this.getPlaceByCoordinate();
    }



    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
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


  public save() {
    this.storeService.setPartial({
      address: {
        description: this.description,
        locationText: this.locationText,
        coordinate: { lat: this.latitude, lon: this.longitude }
      }
    });
    this.router.navigate(['address']);
  }

}

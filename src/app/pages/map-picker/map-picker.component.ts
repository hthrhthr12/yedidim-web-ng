import {Component, OnInit, NgZone, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MapsAPILoader} from '@agm/core';
import {StoreService} from '../../services/store/store.service';
import {google} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.scss']
})
export class MapPickerComponent implements OnInit {
  description: string;
  latitude: number;
  longitude: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  @Output()
  setLocation = new EventEmitter<any>();


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public router: Router,
    private storeService: StoreService
  ) {
  }

  ngOnInit() {
    const callData = this.storeService.get();
    if (callData) {
      this.description = callData.address.description;
      this.latitude = callData.address.coordinate ? callData.address.coordinate.lat : 39.8282;
      this.longitude = callData.address.coordinate ? callData.address.coordinate.lon : -98.5795;

    } else {
      this.setCurrentPosition();
      this.getPlaceByCoordinate();
    }


    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          // TODO Check if it works.
          const place: any = {}; // : google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

      });
    }
  }

  getPlaceByCoordinate() {
    const geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(this.latitude, this.longitude);
    geocoder.geocode({location: latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
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
        coordinate: {lat: this.latitude, lon: this.longitude}
      }
    });
    this.router.navigate(['address']);
  }

}

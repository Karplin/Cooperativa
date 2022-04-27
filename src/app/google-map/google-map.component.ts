import { Component, ViewChild } from '@angular/core';
//import { google } from '@google/maps';
declare var google: any;


@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
})
export class GoogleMapComponent {

  
  @ViewChild("map") mapElement;
  map: any;
  constructor() {
    
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){

    let coords = new google.maps.LatLng(18.47457056506465, -69.90294310184876);
    
    let mapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker = new google.maps.Marker({
      map: this.mapElement.nativeElement,
      position: coords
    })

  }

}







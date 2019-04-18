import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  geolocationPosition: Position;
  lat: number;
  lon: number;
  loc: string;
  data: any;
  city: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position,
                this.lat = this.geolocationPosition.coords.latitude,
                this.lon = this.geolocationPosition.coords.longitude,
                    console.log(position)
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    };
  }

getAddress(latitude,longitude){
  var url = 'https://atlas.microsoft.com/search/address/reverse/crossstreet/json?query=' + latitude + ',' + longitude + '&api-version=1.0&subscription-key=OTcP25vYNDubsAoCXV0kArBgaqFZPO35ytCPSIgtW2w';
  this.httpClient.get(url).subscribe(response => {
    this.data = response;
    this.city = this.data.addresses[0].address.municipality;
    console.log(this.city);
});
}

  get_products(){
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res : any[])=>{
    console.log(res);
    });
}
  private gs  = []; 
  get_https(){
    this.httpClient.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe((res : any[])=>{
    console.log(res);
    this.gs = res;
    });
}
}
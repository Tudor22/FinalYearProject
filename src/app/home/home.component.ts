import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  geolocationPosition: Position;
  lat: number;
  lon: number;
  city: any;
  constructor(private user: UserService, private httpClient: HttpClient) { }

  ngOnInit() {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.geolocationPosition = position,
                this.lat = this.geolocationPosition.coords.latitude,
                this.lon = this.geolocationPosition.coords.longitude,
                    console.log(position);
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
  };

  getCity(latitude,longitude){
    this.user.getCity(latitude,longitude).subscribe(data => {
      if(data.success) {
        console.log("Success")
        this.city = data.city
      } else {
        alert("Error")
      }
    });
  };

  get_products(){
    this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees').subscribe((res : any[])=>{
    console.log(res);
    });
};
  private gs  = []; 
  get_https(){
    this.httpClient.get('https://fakerestapi.azurewebsites.net/api/Books').subscribe((res : any[])=>{
    console.log(res);
    this.gs = res;
    });
};

postPorfile(){
  this.httpClient.post('http://apptesting444.azurewebsites.net/api/login',
  {
    username: 'admin',
    password: 'admin'
  })
  .subscribe((some:any) => {
    console.log()
  });
};
};
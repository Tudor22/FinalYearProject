import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { BotService } from '../bot.service';

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
  
  convId: string;
  id: any;
  activities: any;
  watermark = "0";

  constructor(private bot: BotService, private user: UserService, private httpClient: HttpClient) { }

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

  Authentication(){
    this.bot.Authentication().subscribe(data => {
      if(!data) {
        alert("Error")
      } else {
        console.log("Success")
        this.convId = data.conversationId
      }
    });
  };

  sendActivity(){
    const message = "ssssss"
    this.bot.sendActivity(this.convId, message).subscribe(data => {
      if(!data) {
        alert("Error")
      } else {
        console.log("Success")
        this.id = data.id
      }
    });
  };

  retrieveActivity(){
    this.bot.retrieveActivity(this.convId, this.watermark).subscribe(data => {
      if(!data) {
        alert("Error")
      } else {
        console.log("Success")
        this.activities = data.activities;
        this.watermark = data.watermark;
       }
     });
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

};
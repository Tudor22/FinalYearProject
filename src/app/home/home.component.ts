import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { BotService } from '../bot.service';
import * as AdaptiveCards from "adaptivecards";

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
  activities: string[] = [];
  watermark: string = "0";
  message: string[] = [];
  card: any;




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
    this.Authentication();

  };

  renderCard() {
    var adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
      fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
    });
    adaptiveCard.onExecuteAction = function (action) { alert("Ow!"); }
    adaptiveCard.parse(this.card);
    var renderedCard = adaptiveCard.render();
    var node = document.createElement("P");
    var textnode = document.body.appendChild(renderedCard);
    node.appendChild(textnode);
    document.getElementById("card").appendChild(node);

  }


  Authentication() {
    this.bot.Authentication().subscribe(data => {
      if (!data) {
        alert("Error")
      } else {
        console.log("Success")
        this.convId = data.conversationId
      }
    });
  };

  sendActivity(event) {
    const value = event.target.parentNode.querySelector('#message').value
    this.message.push(<string>value)
    this.bot.sendActivity(this.convId, value).subscribe(data => {
      if (!data) {
        alert("Error")
      } else {
        console.log("Success");
        this.id = data.id;
        setTimeout(() => this.retrieveActivity(), 2500);
      }
    });
  };

  retrieveActivity() {
    this.bot.retrieveActivity(this.convId, this.watermark).subscribe(data => {

      if (!data) {
        alert("Error");
      }
      else {
        console.log("Success")
        this.watermark = data.watermark;

        if (data.activities[1].text != null) {
          var a = data.activities[1].text;
          a = Array.of(a);
          this.activities.push(a);
        }
        else if (data.activities[1].attachments[0].content != null) {
          this.card = data.activities[1].attachments[0].content;
          this.renderCard();
        }
      }
    });
  };

  getCity(latitude, longitude) {
    this.user.getCity(latitude, longitude).subscribe(data => {
      if (data.success) {
        console.log("Success")
        this.city = "Weather in " + data.city
      } else {
        alert("Error")
      }
    });
  };

};
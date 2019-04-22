import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface auth {
    conversationId: string
  }
interface sendActivity{
    id: any
}
interface retrieveActivity{
    activities: any,
    watermark: string
}
@Injectable()
export class BotService {

 constructor(private http: HttpClient) { }

    Authentication() {
        const post = {
            "type": "message",
            "from": {
                "id": "user1"
            },
            "text": "hello"
            };
        return this.http.post<auth>('http://apptesting444.azurewebsites.net/api/bot/auth', post)
    };

    sendActivity(convId, message){
        return this.http.post<sendActivity>("http://apptesting444.azurewebsites.net/api/bot/sendActivity",
        {
        convId,
        message
        });
    };

    retrieveActivity(convId, watermark){
        return this.http.get<retrieveActivity>("http://apptesting444.azurewebsites.net/api/bot/retrieveActivity/" + convId + "/" + watermark)
        };
}
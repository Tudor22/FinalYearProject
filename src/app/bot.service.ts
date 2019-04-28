import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface auth {
    conversationId: string
}
interface sendActivity {
    id: any
}
interface retrieveActivity {
    activities: any,
    watermark: string
}
@Injectable()
export class BotService {

    constructor(private http: HttpClient) { }
 
    Authentication() { //Post request to backend to get a conversation ID from the bot
        const post = {
            "type": "message",
            "from": {
                "id": "user1"
            },
            "text": "hello"
        };
        return this.http.post<auth>('http://4yearproject.azurewebsites.net/api/bot/auth', post)
    };

    sendActivity(convId, message) { //Post request to backend to send a message to the bot and get a conversation ID
        return this.http.post<sendActivity>("http://4yearproject.azurewebsites.net/api/bot/sendActivity",
            {
                convId,
                message
            });
    };

    retrieveActivity(convId, watermark) { //Get request to backend with conversation ID and watermark as parameters, to get the bot response to the message sent by the user 
        return this.http.get<retrieveActivity>("http://4yearproject.azurewebsites.net/api/bot/retrieveActivity/" + convId + "/" + watermark)
    };
};
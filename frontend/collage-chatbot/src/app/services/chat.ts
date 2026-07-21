/*import { Service } from '@angular/core';

@Service()
export class Chat {}*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  getAiReply(sms:string){
    if(sms.toLocaleLowerCase().includes("admission")){
      return "You can aapply through university admission portal.";
    }
    if(sms.toLocaleLowerCase().includes("course")){
      return "You can check the available courses on our website.";
    }
    return "Thank you for your question. We will get back to you shortly.";

  }
}

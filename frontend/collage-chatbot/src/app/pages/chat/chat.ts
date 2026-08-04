import { NgClass, NgIf ,NgFor} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChatService} from '../../services/chat';

interface Chatmessage {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf, NgFor],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
})
export class Chat {
  constructor(private chatService: ChatService) {}
  User_text: string = "";
  isTyping=false;
  message: Chatmessage[] = [
    
  ];

  send_text(){
    if(this.User_text.trim() === "") {
      return;
    }
    let userMessage = this.User_text;
  this.message.push({
    sender: "user",
    text: this.User_text
  });
  this.User_text="";
  this.isTyping=true;
  this.chatService.getAiReply(userMessage).subscribe({
    next: (response) => {
        this.message.push({
            sender: "AI",
            text: response.reply
        });

        this.isTyping = false;
    },
    error: (error) => {
        console.error(error);

        this.message.push({
            sender: "AI",
            text: "Server Error"
        });

        this.isTyping = false;
    }
});

 }
}

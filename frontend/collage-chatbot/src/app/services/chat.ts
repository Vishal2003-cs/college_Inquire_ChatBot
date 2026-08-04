import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:3000/chat';

  constructor(private http: HttpClient) {}

  getAiReply(sms: string) {
    return this.http.post<{ reply: string }>(
      this.apiUrl,
      {
        message: sms
      }
    );
  }

}
import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';
import { MessageBox } from 'src/app/shared/dto/message-box';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private serverUrl = 'http://localhost:8080/ws'; // URL của WebSocket server (Spring Boot)
  private stompClient: any;
  private messageSubject = new Subject<MessageBox>();
  
  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const socket = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(socket);
    
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe("/topic/greeting", (response: any) => {
        this.messageSubject.next(JSON.parse(response.body));
      });
    });
  } 

  sendMessage(temp: string) {
    this.stompClient.send('/app/hello', {}, temp);
  }

  getMessageObservable() {
    return this.messageSubject.asObservable();
  }
}

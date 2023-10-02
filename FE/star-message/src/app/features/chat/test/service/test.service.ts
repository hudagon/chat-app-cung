import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { TestComponent } from '../test/test.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private serverUrl = 'http://localhost:8080/ws'; // URL của WebSocket server (Spring Boot)
  private stompClient: any;
  private messageSubject = new Subject<string>();
  
  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const socket = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(socket);
    
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe("/topic/greeting", (response: any) => {
        this.messageSubject.next(response.body);
      });
    });
  }

  sendMessage(message: string) {
    this.stompClient.send('/app/hello', {}, JSON.stringify({ message }));
  }

  getMessageObservable() {
    return this.messageSubject.asObservable();
  }
}

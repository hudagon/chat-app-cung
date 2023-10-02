import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocket2Service {
  private serverUrl = 'http://localhost:8080/ws'; // URL của WebSocket server (Spring Boot)
  private stompClient1: any;
  private whoIsTyping = new Subject<number>();
  
  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const socket1 = new SockJS(this.serverUrl);
    this.stompClient1 = Stomp.over(socket1);
    
    this.stompClient1.connect({}, () => {
      this.stompClient1.subscribe("/topic/typing", (response: any) => {
        this.whoIsTyping.next(JSON.parse(response.body));
      });
    });
  } 

  isTyping(temp: string) {
    this.stompClient1.send('/app/typing', {}, temp);
  }

  getMessageObservable1() {
    return this.whoIsTyping.asObservable();
  }
}

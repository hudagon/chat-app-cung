import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  // connect() {
  //   this.socket.connect(); // Kết nối đến máy chủ WebSocket
  // }

  // disconnect() {
  //   this.socket.disconnect(); // Ngắt kết nối WebSocket
  // }

  // sendMessage(message: string) {
  //   this.socket.emit('hello', message); // Gửi tin nhắn tới máy chủ
  // }

  // onMessageReceived() {
  //   return this.socket.fromEvent('greeting'); // Lắng nghe sự kiện nhận tin nhắn từ máy chủ
  // }
}

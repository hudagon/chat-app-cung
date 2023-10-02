import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MessageBox } from 'src/app/shared/dto/message-box';
import { WebSocketService } from '../../services/web-socket.service';
import { ChatService } from '../../services/chat.service';
import { WebSocket2Service } from '../../services/web-socket2.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('chatBox') private chatBox!: ElementRef;
  inputMessage: string = '';
  showEmojiPicker = false;
  mainUserId: number = 0;
  subUserId: number = 0;
  whoIsTyping: number = 0;
  isTypingFlag: boolean = false;

  currentUserInfo = {
    url: '',
    name: '',
    status: ''
  }

  subUserInfo = {
    url: '',
    name: '',
    status: ''
  };

  messages: MessageBox[] = [];

  constructor(
    private webSocketService: WebSocketService,
    private webSocketService2: WebSocket2Service,
    private chatService: ChatService
  ) {
  }

  ngOnInit(): void {
    this.chatService.getLatest20().subscribe( (data) => {
      this.messages = data;
    });

    this.mainUserId = +localStorage.getItem("mainUserId")!;
    this.subUserId = +localStorage.getItem("subUserId")!;
    if (this.mainUserId == 1) {
      this.currentUserInfo = {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU62Md2yC4lIg8Mt_ZUGEVBaoXR7apfYbWbQ&usqp=CAU',
        name: 'Hudagon',
        status: 'Cruck của đứa đáng iu nhất thế giới!'
      };
      this.subUserInfo = {
        url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        name: 'Booseog',
        status: 'Nàng thơ VN'
      };
    } else {
      this.currentUserInfo = {
        url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        name: 'Booseog',
        status: 'Nàng thơ VN'
      };
      this.subUserInfo = {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU62Md2yC4lIg8Mt_ZUGEVBaoXR7apfYbWbQ&usqp=CAU',
        name: 'Hudagon',
        status: 'Cruck của đứa đáng iu nhất thế giới!'
      };
    }

    this.webSocketService.getMessageObservable().subscribe((message: MessageBox) => {
      this.messages.push(message);
    });

    this.webSocketService2.getMessageObservable1().subscribe((data: any) => {
      this.whoIsTyping = data;
      this.isTypingFlag = this.whoIsTyping == this.subUserId ? true : false;
    });
  }
  
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
 
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    console.log(this.inputMessage)
    const { inputMessage } = this;
    const text = `${inputMessage}${event.emoji.native}`;

    this.inputMessage = text;
  }

  onFocus() {
    this.showEmojiPicker = false;
  }

  isTyping() {
    if (this.inputMessage != '') {
      this.webSocketService2.isTyping(this.mainUserId + '');
    } else {
      this.webSocketService2.isTyping(0 + '');
    }
  }

  sendMessage() {
    if (this.inputMessage != '') {
      const temp = '{"content": "' + this.inputMessage + '"' + ', "userId": ' + this.mainUserId + '}' 
      this.webSocketService.sendMessage(temp);
      window.scrollY;

      this.inputMessage = '';
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
  }
}

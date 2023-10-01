import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageBox } from 'src/app/shared/dto/message-box';
import { RandomService } from '../../services/random.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('chatBox') private chatBox!: ElementRef;
  inputMessage: string = '123';
  babyIsTyping: boolean = false;
  showEmojiPicker = false;

  messages: MessageBox[] = [
    { id: 1, content: 'Message 1', userId: 101 },
    { id: 2, content: 'Message 2', userId: 102 },
    { id: 3, content: 'Message 3', userId: 101 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
    { id: 4, content: 'Message 3', userId: 102 },
  ];

  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set = 'twitter';

  constructor(
    private websocketService: WebsocketService,
    private randomService: RandomService
  ) {
  }

  ngOnInit(): void {
    this.randomService.getProduct().subscribe((data) => {
      console.log(data);
    });
    // this.websocketService.connect();

    // this.websocketService.onMessageReceived().subscribe((data: any) => {
    //   console.log(data);
    // });
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

  sendMessage() {
    if (this.inputMessage != '') {
      this.messages.push({ id: 5, content: this.inputMessage, userId: 101 });
      window.scrollY;

      // this.websocketService.sendMessage(this.inputMessage);

      this.inputMessage = '';
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}

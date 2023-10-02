import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  message: string = '';
  messages: string[] = [];

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.testService.getMessageObservable().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message) {
      this.testService.sendMessage(this.message);
      this.message = '';
    }
  }
}

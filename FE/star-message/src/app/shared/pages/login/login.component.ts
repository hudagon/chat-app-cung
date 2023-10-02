import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/features/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  login() {
    if (this.username == '' || this.password == '') {
      alert('Nhập cho đủ vào cưng ơi !!!');
    }

    if (this.username == 'hudagon' && this.password == 'hudagon') {
      localStorage.setItem("mainUserId", "2");
      localStorage.setItem("subUserId", "1");
      this.router.navigateByUrl('chat');  
    }

    if (this.username == 'booseog' && this.password == 'booseog') {
      localStorage.setItem("mainUserId", "1");
      localStorage.setItem("subUserId", "2");
      this.router.navigateByUrl('chat');  
    }
  }
}
  
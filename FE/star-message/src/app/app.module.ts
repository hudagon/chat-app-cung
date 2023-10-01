import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';
import { MainComponent } from './features/chat/main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RandomlyComponent } from './features/chat/randomly/randomly.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8080/websocket', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    NavigatorComponent,
    MainComponent,
    RandomlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PickerComponent,
    EmojiModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

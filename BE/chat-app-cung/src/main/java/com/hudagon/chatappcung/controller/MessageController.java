package com.hudagon.chatappcung.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class MessageController {

    @MessageMapping("/greets")
    @SendTo("/topic/greetings")
    public ResponseEntity<?> greetings() {
        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
    }
}

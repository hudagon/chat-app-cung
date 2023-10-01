package com.hudagon.chatappcung.test1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class RestTestController {
    @Autowired
    private TestService testService;

    @MessageMapping("/hello")
    @SendTo("/topic/greeting")
    public MessageDemo greeting() {
        return testService.getMessage();
    }
}

package com.hudagon.chatappcung.test1;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hudagon.chatappcung.model.dto.MessageBox;
import com.hudagon.chatappcung.model.payload.MessageBoxRequest;
import com.hudagon.chatappcung.model.payload.MessageBoxResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

//@RestController
//@CrossOrigin("*")
public class RestTestController {
//    @Autowired
//    private TestService testService;
//
//    @MessageMapping("/hello")
//    @SendTo("/topic/greeting")
//    public String greeting(String json) {
//        try {
//            ObjectMapper objectMapper = new ObjectMapper();
//            MessageBoxRequest messageBoxRequest = objectMapper.readValue(json, MessageBoxRequest.class);
//
//            MessageBoxResponse messageBoxResponse = new MessageBoxResponse();
//            messageBoxResponse.setContent(messageBoxRequest.getContent());
//            messageBoxResponse.setUserId(messageBoxRequest.getUserId());
//
//            String jsonResponse = objectMapper.writeValueAsString(messageBoxResponse);
//
//            return jsonResponse;
//        } catch (IOException e) {
//            e.printStackTrace();
//            return null;
//        }
//    }
}

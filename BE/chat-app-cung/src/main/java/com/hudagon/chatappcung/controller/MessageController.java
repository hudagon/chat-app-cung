package com.hudagon.chatappcung.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hudagon.chatappcung.model.entity.TempMessage;
import com.hudagon.chatappcung.model.payload.MessageBoxRequest;
import com.hudagon.chatappcung.model.payload.MessageBoxResponse;
import com.hudagon.chatappcung.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
public class MessageController {

    @Autowired
    private ChatService chatService;

    @GetMapping("/chat")
    public ResponseEntity<List<TempMessage>> getAll() {
        List<TempMessage> temp = chatService.getAll();
        return new ResponseEntity<>(temp.reversed(), HttpStatus.OK);
    }

    @MessageMapping("/hello")
    @SendTo("/topic/greeting")
    public String greeting(String json) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            MessageBoxRequest messageBoxRequest = objectMapper.readValue(json, MessageBoxRequest.class);

            TempMessage tempMessage = new TempMessage();
            tempMessage.setContent(messageBoxRequest.getContent());
            tempMessage.setUserId(messageBoxRequest.getUserId());

            chatService.create(tempMessage);

            MessageBoxResponse messageBoxResponse = new MessageBoxResponse();
            messageBoxResponse.setContent(messageBoxRequest.getContent());
            messageBoxResponse.setUserId(messageBoxRequest.getUserId());

            String jsonResponse = objectMapper.writeValueAsString(messageBoxResponse);

            return jsonResponse;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @MessageMapping("/typing")
    @SendTo("/topic/typing")
    public String isTyping(String json) {
        System.out.println(json + " đang nhắn!");
        return json;
    }
}

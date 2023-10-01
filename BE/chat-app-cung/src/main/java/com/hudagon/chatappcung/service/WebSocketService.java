package com.hudagon.chatappcung.service;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WebSocketService {
    private final SimpMessagingTemplate simpMessagingTemplate;

    public void sendMessage(final String topicSuffix) {
        simpMessagingTemplate.convertAndSend("/topic" + topicSuffix, "Hello World!");
    }
}

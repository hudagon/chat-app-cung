package com.hudagon.chatappcung.service;

import com.hudagon.chatappcung.model.entity.TempMessage;
import com.hudagon.chatappcung.model.payload.MessageBoxResponse;
import com.hudagon.chatappcung.repository.IChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {
    @Autowired
    private IChatRepository chatRepository;

    public void create(TempMessage tempMessage) {
        chatRepository.save(tempMessage);
    }

    public List<TempMessage> getAll() {
        return chatRepository.getLatest20();
    }
}

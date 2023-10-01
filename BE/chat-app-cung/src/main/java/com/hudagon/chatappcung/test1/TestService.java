package com.hudagon.chatappcung.test1;

import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.UUID;

@Service
public class TestService {
    public MessageDemo getMessage() {
        Calendar c = Calendar.getInstance();
        int timeOfDay = c.get(Calendar.HOUR_OF_DAY);
        StringBuilder sb = new StringBuilder();
        String message = "Have a Good Day";
        if (timeOfDay >= 0 && timeOfDay < 12) {
            message = "Good Morning";
        } else if (timeOfDay >= 12 && timeOfDay < 16) {
            message = "Good Afternoon";
        } else if (timeOfDay >= 16 && timeOfDay < 21) {
            message = "Good Evening";
        } else if (timeOfDay >= 21 && timeOfDay < 24) {
            message = "Good Night";
        }
        sb.append(message).append(" - ").append(generateString());
        return new MessageDemo(sb.toString());
    }

    private String generateString() {
        String uuid = UUID.randomUUID().toString();
        return uuid;
    }
}

package com.hudagon.chatappcung.model.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageBoxResponse {
    private Long id;
    private String content;
    private Long userId;
}

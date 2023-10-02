package com.hudagon.chatappcung.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageBox {
    private Long id;
    private String content;
    private Long userId;
}

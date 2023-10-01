package com.hudagon.chatappcung.controller;

import com.hudagon.chatappcung.model.dto.ProductDTO;
import com.hudagon.chatappcung.model.entity.Product;
import com.hudagon.chatappcung.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class HomeController {

    @Autowired
    private IProductRepository productRepository;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> get() {
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/products")
    @SendTo("/topic/product")
    public String create(@RequestBody ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        productRepository.save(product);
        return "Ngọc Cute";
    }
}

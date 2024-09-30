package org.lotusbank.lab1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @GetMapping("/")
    public String welcome(){
        return "Welcome to WAA Lab 1";
    }
}

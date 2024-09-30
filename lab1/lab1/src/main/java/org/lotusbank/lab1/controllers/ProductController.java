package org.lotusbank.lab1.controllers;

import org.lotusbank.lab1.models.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @GetMapping("/")
    public String welcome(){
        return "Welcome to WAA Lab 1";
    }

    @GetMapping("/product")
    public Product GetProduct()
    {
        return new Product(101,"IPhone 16","Experience the technology",1200.00);
    }
}

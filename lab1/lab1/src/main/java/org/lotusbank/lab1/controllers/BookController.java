package org.lotusbank.lab1.controllers;

import org.lotusbank.lab1.models.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @GetMapping("/book")
    public Book GetBook(){
        return new Book(1,"Design Patterns","DP101");
    }
}

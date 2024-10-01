package org.lotusbank.lab2.controller;

import org.lotusbank.lab2.model.Book;
import org.lotusbank.lab2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("books")
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping("")
    public List<Book> getBooks(){
        return bookService.getBooks();
    }
}

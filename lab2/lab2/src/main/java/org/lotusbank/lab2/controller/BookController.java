package org.lotusbank.lab2.controller;

import org.lotusbank.lab2.model.Book;
import org.lotusbank.lab2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id){
        return bookService.getBook(id);
    }

    @PostMapping("")
    public Book addBook(@RequestBody Book book){
        return bookService.addBook(book);
    }

    @PutMapping("")
    public Book updateBook(@RequestBody Book book){
        return bookService.updateBook(book);
    }

    @DeleteMapping("/{id}")
    public boolean deleteBook(@PathVariable int id){
        return bookService.deleteBook(id);
    }
}

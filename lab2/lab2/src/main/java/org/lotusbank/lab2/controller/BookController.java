package org.lotusbank.lab2.controller;

import org.lotusbank.lab2.model.Book;
import org.lotusbank.lab2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("books")
public class BookController {
    @Autowired
    private BookService bookService;
    @GetMapping("")
    public ResponseEntity<List<Book>> getBooks(){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBook(id));
    }

    @PostMapping("")
    public ResponseEntity<Book> addBook(@RequestBody Book book){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.addBook(book));
    }

    @PutMapping("")
    public ResponseEntity<Book> updateBook(@RequestBody Book book){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.updateBook(book));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteBook(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.deleteBook(id));
    }
}

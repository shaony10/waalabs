package org.lotusbank.lab2.controller;

import org.lotusbank.lab2.model.Book;
import org.lotusbank.lab2.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("versioning/books")
public class BookVersioningController {
    @Autowired
    private BookService bookService;
    @GetMapping(value = "", produces = "application/v1+json") //Media Type Versioning
    public ResponseEntity<List<Book>> getBooksV1(){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBooks());
    }
    @GetMapping(value = "", produces = "application/v2+json") //Media Type Versioning
    public ResponseEntity<List<Book>> getBooksV2(){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBooksV2());
    }

    @GetMapping(value = "/{id}", headers = "X_API_VERSION=1") //Custom Header Versioning
    public ResponseEntity<Book> getBookV1(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBook(id));
    }

    @GetMapping(value = "/{id}", headers = "X_API_VERSION=2") //Custom Header Versioning
    public ResponseEntity<Book> getBookV2(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBookV2(id));
    }

    @GetMapping(value = "/v1/{id}") //URI Versioning
    public ResponseEntity<Book> getBookV3(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBook(id));
    }

    @GetMapping(value = "/v2/{id}") //URI Versioning
    public ResponseEntity<Book> getBookV4(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBookV2(id));
    }

    @GetMapping(value = "/{id}",params = "version=1") //Request Param Versioning
    public ResponseEntity<Book> getBookV5(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBook(id));
    }

    @GetMapping(value = "/{id}",params = "version=2") //Request Param Versioning
    public ResponseEntity<Book> getBookV6(@PathVariable int id){
        return ResponseEntity
                .ok()
                .header("Content-Type","application/json")
                .body(bookService.getBookV2(id));
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

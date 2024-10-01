package org.lotusbank.lab2.service;

import org.lotusbank.lab2.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    private List<Book> books;

    public BookServiceImpl(){
        books = new ArrayList<>();
        for (int i=0; i<5;i++){
            int key = i+1;
            books.add(new Book(key, "Book Title "+key, "200"+key,2000+key*10));
        }
    }
    @Override
    public List<Book> getBooks() {
        return books;
    }

    @Override
    public Book getBook(int id) {
        return books.stream().filter(c->c.getId().equals(id)).findFirst().orElseGet(null);
    }
}

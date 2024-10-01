package org.lotusbank.lab2.service;

import org.lotusbank.lab2.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Override
    public List<Book> getBooks() {
        List<Book> books = new ArrayList<>();

        for (int i=0; i<5;i++){
            int key = i+1;
            books.add(new Book(key, "Book Title "+key, "200"+key,2000+key*10));
        }
        return books;
    }
}

package org.lotusbank.lab2.service;

import org.lotusbank.lab2.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {
    private List<Book> books;

    public BookServiceImpl() {
        books = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            int key = i + 1;
            books.add(new Book(key, "Book Title " + key, "200" + key, 2000 + key * 10));
        }
    }

    @Override
    public List<Book> getBooks() {
        return books;
    }

    @Override
    public Book getBook(int id) {
        return books.stream().filter(c -> c.getId().equals(id)).findFirst().orElseGet(null);
    }

    @Override
    public Book addBook(Book book) {
        book.setId(books.size() + 1);
        books.add(book);
        return book;
    }

    @Override
    public Book updateBook(Book book) {
        books = books.stream()
                .map(item -> {
                    if (item.getId().equals( book.getId())) {
                        item.setTitle(book.getTitle());
                        item.setIsbn(book.getIsbn());
                        item.setPrice(book.getPrice());
                    }
                    return item;
                })
                .collect(Collectors.toList());


        return book;
    }

    @Override
    public boolean deleteBook(int id) {
        try {
            books = books.stream().filter(c-> !c.getId().equals(id)).collect(Collectors.toList());
            return true;
        }catch (Exception e){
            return false;
        }
    }
}

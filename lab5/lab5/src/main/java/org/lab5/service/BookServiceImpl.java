package org.lab5.service;

import org.lab5.model.Book;
import org.lab5.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImpl implements BookService {
    private List<Book> books;
    private BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        books = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            int key = i + 1;
            books.add(new Book(key, "Book Title " + key, "200" + key, 2000 + key * 10));
        }

        //V2 Data
        for (int i = 10; i < 15; i++) {
            int key = i + 1;
            books.add(new Book(key, "Book Title " + key, "200" + key, 2000 + key * 10));
        }
    }

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBook(int id) {
        return bookRepository.findById(id).get();
    }

    @Override
    public Book addBook(Book book) {
        book = bookRepository.save(book);
        return book;
    }

    @Override
    public Book updateBook(Book book) {
        book = bookRepository.save(book);
        return book;
    }

    @Override
    public boolean deleteBook(int id) {
        try {
            bookRepository.deleteById(id);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<Book> getBooksV2() {
        for (int i = 20; i < 25; i++) {
            int key = i + 1;
            books.add(new Book(key, "Book Title " + key, "200" + key, 2000 + key * 10));
        }
        return books;
    }

    @Override
    public Book getBookV2(int id) {
        return books.stream().filter(c -> c.getId()==(id+10)).findFirst().orElseGet(null);
    }
}

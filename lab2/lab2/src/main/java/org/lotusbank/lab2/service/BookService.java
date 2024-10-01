package org.lotusbank.lab2.service;

import org.lotusbank.lab2.model.Book;

import java.util.List;

public interface BookService {
    List<Book> getBooks();

    Book getBook(int id);

    Book addBook(Book book);

    Book updateBook(Book book);

    boolean deleteBook(int id);
}

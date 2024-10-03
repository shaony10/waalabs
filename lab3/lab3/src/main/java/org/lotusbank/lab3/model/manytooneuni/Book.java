package org.lotusbank.lab3.model.manytooneuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Book {
    @Id
    private int id;

    private String name;
    private String isbn;

    @ManyToOne
    private Publisher publisher;
}

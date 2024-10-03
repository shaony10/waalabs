package org.lotusbank.lab3.model.manytooneuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

//TODO: Entity
public class Publisher {
    @Id
    private int id;

    private String name;
    private String storeName;

    @OneToMany(mappedBy = "publisher")
    private List<Book> books;
}

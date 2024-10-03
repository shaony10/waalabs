package org.lotusbank.lab3.model.onetooneuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class Book {
    @Id
    private int id;

    private String name;
    private String isbn;

    @OneToOne
    private Reservation reservation;
}

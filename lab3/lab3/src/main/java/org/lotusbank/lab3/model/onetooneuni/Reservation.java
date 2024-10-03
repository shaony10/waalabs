package org.lotusbank.lab3.model.onetooneuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.time.LocalDate;
import java.util.List;

@Entity
public class Reservation {
    @Id
    private int id;

    private String title;
    private LocalDate date;
}

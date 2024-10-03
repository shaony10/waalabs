package org.lotusbank.lab3.model.onetomanyuni;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Reservation {
    @Id
    private int id;
    private String name;
    private int seatCount;
}

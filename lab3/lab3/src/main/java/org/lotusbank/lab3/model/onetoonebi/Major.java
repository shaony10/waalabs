package org.lotusbank.lab3.model.onetoonebi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

import java.util.List;

@Entity
public class Major {
    @Id
    private int id;

    private String title;

    @OneToOne(mappedBy = "major")
    private Student student;
}

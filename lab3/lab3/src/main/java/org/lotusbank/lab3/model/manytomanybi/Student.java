package org.lotusbank.lab3.model.manytomanybi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

import java.util.List;

//TODO: @Entity
public class Student {
    @Id
    private int id;

    private String firstname;
    private String lastname;

    @ManyToMany
    private List<Course> courses;
}

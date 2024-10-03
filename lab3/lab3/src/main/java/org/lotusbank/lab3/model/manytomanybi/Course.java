package org.lotusbank.lab3.model.manytomanybi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Course {
    @Id
    private int id;

    private String name;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students;
}

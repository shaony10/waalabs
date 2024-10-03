package org.lotusbank.lab3.model.onetomanybi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Employee {
    @Id
    private int id;
    private String name;
    private int age;

    @ManyToOne
    private Department department;
}

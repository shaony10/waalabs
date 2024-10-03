package org.lotusbank.lab3.model.onetomanybi;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Employee {
    @Id
    private int id;
    private String name;
    private int age;

    @ManyToOne
    //@JoinColumn(name = "deptid")
    private Department department;
}

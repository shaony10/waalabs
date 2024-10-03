package org.lotusbank.lab4.mappinginheritance;

import jakarta.persistence.*;

@Entity()
public class OrderLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int quantity;

    @ManyToOne
    @JoinColumn(name = "productid")
    private Product product;
}

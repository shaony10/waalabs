package org.lotusbank.lab4.mappinginheritance;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity(name = "`Order`")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderid")
    private long id;
    private LocalDate date;

    @OneToMany()
    @JoinTable(name = "order_orderline")
    private List<OrderLine> orderLines;

    @ManyToOne()
    private Customer customer;
}

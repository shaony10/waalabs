package org.lotusbank.lab4.model.complexmapping;

import jakarta.persistence.*;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "APPDATE")
    private String appdate;

    @ManyToOne
    @JoinColumn(name = "PATIENT")
    private Patient patient;
    @Embedded
    private Payment payment;

    @ManyToOne
    @JoinColumn(name = "DOCTOR")
    private Doctor doctor;
}

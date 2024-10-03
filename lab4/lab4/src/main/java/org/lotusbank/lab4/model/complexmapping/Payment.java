package org.lotusbank.lab4.model.complexmapping;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Payment {
    @Column(name = "PAYDATE")
    private String paydate;
    @Column(name = "AMOUNT")
    private double amount;
}

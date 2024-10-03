package org.lotusbank.lab4.mappinginheritance;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("CD")
public class CD extends Product{
    private String artist;
}

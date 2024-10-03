package org.lotusbank.lab4.mappinginheritance;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("DVD")
public class DVD extends Product{
    private String genre;
}

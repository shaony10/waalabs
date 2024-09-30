package org.lotusbank.lab1.models;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;

@AllArgsConstructor
@Data
public class Product {
    //@Setter(AccessLevel.NONE)
    private Integer Id;
    private String Name;
    private String Description;
    private Double Price;

    private PackageContainer packageContainer;
}

package org.lotusbank.lab2.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Book {
    private Integer Id;
    private String Title;
    private String Isbn;
    private double Price;
}

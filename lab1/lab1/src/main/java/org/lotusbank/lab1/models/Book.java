package org.lotusbank.lab1.models;

import lombok.*;

@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Getter
    @Setter
    private Integer Id;

    @Getter
    @Setter
    private String Title;

    @Getter
    @Setter
    private String Isbn;
}

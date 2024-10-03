package org.lotusbank.lab4.model.complexmapping;

import jakarta.persistence.*;

@Entity
@SecondaryTable(name = "address", pkJoinColumns = {
        @PrimaryKeyJoinColumn(name = "PATIENT_ID",referencedColumnName = "id")
})
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;
    @Column(name = "NAME")
    private String name;

    @Column(table = "address", name = "STREET")
    private String street;
    @Column(table = "address", name = "ZIP")
    private String zip;
    @Column(table = "address", name = "CITY")
    private String city;
}

package com.graduationproject.quinoamarketapp.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "farmers")
public class Farmer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    @OneToMany(mappedBy = "farmer")
    private List<Product> products;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "surname", nullable = false)
    private String surname;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    @Column(name = "phoneNo", unique = true, nullable = false)
    private String phoneNo;
    @Column(name = "address", nullable = false)
    private String address;
    @Lob
    @Column(name = "profilePhoto",length = 1000)
    private byte[] profilePhoto;
}

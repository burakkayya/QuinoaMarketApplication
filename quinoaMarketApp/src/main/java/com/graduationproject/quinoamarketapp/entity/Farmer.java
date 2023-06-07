package com.graduationproject.quinoamarketapp.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "FARMER")
public class Farmer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    @OneToMany(mappedBy = "farmer")
    private List<Product> products;
    private String name;
    private String surname;
    private String password;
    private String email;
    private String phoneNo;
    @Lob
    @Column(name = "profilePhoto",length = 1000)
    private byte[] profilePhoto;
}

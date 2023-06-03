package com.graduationproject.quinoamarketapp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "PRODUCT")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "farmerId")
    private Farmer farmer;
    @Lob
    @Column(name = "productPhoto",length = 1000)
    private byte[] productPhoto;
    private String predictionName;
    private String info;
    private Long stock;
}

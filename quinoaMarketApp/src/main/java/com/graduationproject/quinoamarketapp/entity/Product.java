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
    @OneToOne
    @JoinColumn(name = "imageFile")
    private ImageFile imageFile;
    private String predictionName;
    private String info;
    private Long stock;
}

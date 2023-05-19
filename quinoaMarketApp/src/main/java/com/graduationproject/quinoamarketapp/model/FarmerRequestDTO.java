package com.graduationproject.quinoamarketapp.model;

import com.graduationproject.quinoamarketapp.entity.Product;
import lombok.Data;

import java.util.List;
@Data
public class FarmerRequestDTO {
    private Long id;
    private List<Product> products;
    private String name;
    private String surname;
    private String password;
    private String email;
    private String phoneNo;
    private byte[] profilePhoto;
}

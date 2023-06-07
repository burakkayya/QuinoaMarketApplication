package com.graduationproject.quinoamarketapp.model;

import com.graduationproject.quinoamarketapp.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {
    private Long id;
    private String name;
    private String surname;
    private String email;
}

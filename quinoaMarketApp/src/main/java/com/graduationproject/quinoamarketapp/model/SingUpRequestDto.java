package com.graduationproject.quinoamarketapp.model;

import lombok.Data;

@Data
public class SingUpRequestDto {
    private String name;
    private String surname;
    private String password;
    private String email;
    private String phoneNo;
    private String address;
}

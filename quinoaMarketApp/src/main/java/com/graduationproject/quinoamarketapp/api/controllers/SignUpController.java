package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.SignUpService;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.SingUpRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/public/sign-up")
public class SignUpController {
    @Autowired
    private final SignUpService signUpService;

    @PostMapping()
    ResponseEntity<FarmerResponseDTO> farmerSignUp(@RequestBody SingUpRequestDto singUpDto){
        return ResponseEntity.ok(signUpService.farmerSignUp(singUpDto));
    }
}

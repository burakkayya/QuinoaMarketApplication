package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.SignUpService;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.SingUpRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@AllArgsConstructor
@RestController
@RequestMapping("/api/sign-up")
public class SignUpController {
    private final SignUpService signUpService;
    @PostMapping()
    ResponseEntity<FarmerResponseDTO> farmerSignUp(@RequestBody SingUpRequestDto signUpRequest) throws IOException {
        return ResponseEntity.ok(signUpService.farmerSignUp(signUpRequest));
    }
}

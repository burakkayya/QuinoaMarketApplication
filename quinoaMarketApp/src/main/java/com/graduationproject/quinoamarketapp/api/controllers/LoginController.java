package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.LoginService;
import com.graduationproject.quinoamarketapp.model.LoginRequestDTO;
import com.graduationproject.quinoamarketapp.model.LoginResponseDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@AllArgsConstructor
@Controller
@RequestMapping("/api/login")
public class LoginController {
    LoginService loginService;
    @PostMapping
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO request) throws Exception {
        return ResponseEntity.ok(loginService.login(request));
    }
}
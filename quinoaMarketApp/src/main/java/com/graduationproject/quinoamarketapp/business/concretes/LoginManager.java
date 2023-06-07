package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.FarmerService;
import com.graduationproject.quinoamarketapp.business.abstracts.LoginService;
import com.graduationproject.quinoamarketapp.model.LoginRequestDTO;
import com.graduationproject.quinoamarketapp.model.LoginResponseDTO;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class LoginManager implements LoginService {
    FarmerService farmerService;
    ModelMapper modelMapper;
    @Override
    public LoginResponseDTO login(LoginRequestDTO request) {
            if(farmerService.existsByEmailAndPassword(request)){
                return modelMapper.map(farmerService.findByEmail(request.getEmail()), LoginResponseDTO.class);
            }else {
                throw new RuntimeException("email veya şifre hatalı!");
            }
    }
}

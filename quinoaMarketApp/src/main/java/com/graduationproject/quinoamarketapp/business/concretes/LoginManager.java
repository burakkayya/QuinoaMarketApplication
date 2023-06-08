package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.FarmerService;
import com.graduationproject.quinoamarketapp.business.abstracts.LoginService;
import com.graduationproject.quinoamarketapp.model.LoginRequestDTO;
import com.graduationproject.quinoamarketapp.model.LoginResponseDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@AllArgsConstructor
@Service
public class LoginManager implements LoginService {
    FarmerService farmerService;
    ModelMapper modelMapper;
    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequest) {
            if(farmerService.existsByEmailAndPassword(loginRequest)){
                HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
                HttpSession session = request.getSession();
                session.setAttribute("email", loginRequest.getEmail());

                return modelMapper.map(farmerService.findByEmail(loginRequest.getEmail()), LoginResponseDTO.class);
            }else {
                throw new RuntimeException("email veya şifre hatalı!");
            }
    }
}

package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.LoginRequestDTO;
import com.graduationproject.quinoamarketapp.model.LoginResponseDTO;

public interface LoginService {
    LoginResponseDTO login(LoginRequestDTO request);
}

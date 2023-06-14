package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.SingUpRequestDto;

import java.io.IOException;

public interface SignUpService {
    FarmerResponseDTO farmerSignUp(SingUpRequestDto signUpDto) throws IOException;
}

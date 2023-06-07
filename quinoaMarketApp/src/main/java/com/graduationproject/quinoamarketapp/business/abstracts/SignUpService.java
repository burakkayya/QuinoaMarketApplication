package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.SingUpRequestDto;

public interface SignUpService {
    FarmerResponseDTO farmerSignUp(SingUpRequestDto signUpDto);
}

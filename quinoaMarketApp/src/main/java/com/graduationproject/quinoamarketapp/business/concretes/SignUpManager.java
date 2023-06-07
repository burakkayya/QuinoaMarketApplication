package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.FarmerService;
import com.graduationproject.quinoamarketapp.business.abstracts.SignUpService;
import com.graduationproject.quinoamarketapp.entity.Farmer;
import com.graduationproject.quinoamarketapp.model.FarmerRequestDTO;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.SingUpRequestDto;
import com.graduationproject.quinoamarketapp.repository.FarmerRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class SignUpManager implements SignUpService {
    @Autowired
    private final ModelMapper modelMapper;
    @Autowired
    private final FarmerRepository farmerRepository;
    @Override
    public FarmerResponseDTO farmerSignUp(SingUpRequestDto signUpDto) {
        Farmer farmer = modelMapper.map(signUpDto,Farmer.class);
        farmerRepository.save(farmer);
        return modelMapper.map(farmer,FarmerResponseDTO.class);
    }
}

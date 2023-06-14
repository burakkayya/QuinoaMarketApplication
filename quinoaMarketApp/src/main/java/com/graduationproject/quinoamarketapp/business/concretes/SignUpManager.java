package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.SignUpService;
import com.graduationproject.quinoamarketapp.entity.Farmer;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.SingUpRequestDto;
import com.graduationproject.quinoamarketapp.repository.FarmerRepository;
import com.graduationproject.quinoamarketapp.util.ImageUtils;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;

@Service
@AllArgsConstructor
public class SignUpManager implements SignUpService {
    @Autowired
    private final ModelMapper modelMapper;
    @Autowired
    private final FarmerRepository farmerRepository;
    @Override
    public FarmerResponseDTO farmerSignUp(SingUpRequestDto signUpDto) throws IOException {
        String base64Photo = signUpDto.getProfilePhoto();
        String base64Data = base64Photo.substring(base64Photo.indexOf(",") + 1); // Verinin başındaki "data:image/jpeg;base64," kısmını kaldırma
        byte[] profilePhotoBytes = Base64.getDecoder().decode(base64Data);
        signUpDto.setProfilePhoto(Arrays.toString(profilePhotoBytes));
        Farmer farmer = modelMapper.map(signUpDto,Farmer.class);
        farmer.setProfilePhoto(ImageUtils.compressImage(profilePhotoBytes));
        farmerRepository.save(farmer);
        return modelMapper.map(farmer,FarmerResponseDTO.class);
    }
}

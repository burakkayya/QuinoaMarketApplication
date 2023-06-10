package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.FarmerService;
import com.graduationproject.quinoamarketapp.entity.Farmer;
import com.graduationproject.quinoamarketapp.model.FarmerRequestDTO;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.LoginRequestDTO;
import com.graduationproject.quinoamarketapp.repository.FarmerRepository;
import com.graduationproject.quinoamarketapp.util.ImageUtils;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@AllArgsConstructor
public class FarmerManager implements FarmerService {
    @Autowired
    private FarmerRepository farmerRepository;
    private ModelMapper modelMapper;
    @Override
    public FarmerResponseDTO getById(Long id) throws Exception {
        Farmer farmer = farmerRepository.findById(id).orElse(null);
        if(farmer == null) {
            throw new Exception("Farmer not found with id "+ id);
        }
        return modelMapper.map(farmer,FarmerResponseDTO.class);
    }

    @Override
    public List<FarmerResponseDTO> getAll() {
        List<Farmer> farmers = farmerRepository.findAll();
        List<FarmerResponseDTO> farmerResponseList = modelMapper.map(farmers, new TypeToken<List<FarmerResponseDTO>>() {}.getType());
        return farmerResponseList;
    }

    @Override
    public FarmerResponseDTO add(FarmerRequestDTO farmerRequest) {
        Farmer farmer = modelMapper.map(farmerRequest,Farmer.class);
        farmerRepository.save(farmer);
        return modelMapper.map(farmer,FarmerResponseDTO.class);
    }

    @Override
    public FarmerResponseDTO update(FarmerRequestDTO farmerRequest) throws Exception {
        Farmer farmer = farmerRepository.findById(farmerRequest.getId()).orElse(null);
        if(farmer == null){
            throw new Exception("Farmer not found with id "+ farmerRequest.getId());
        }
        farmer = modelMapper.map(farmerRequest,Farmer.class);
        farmerRepository.save(farmer);
        return modelMapper.map(farmer,FarmerResponseDTO.class);
    }

    public FarmerResponseDTO updateProfilePhoto(Long id, MultipartFile profilePhoto) throws Exception{
        Farmer farmer = farmerRepository.findById(id).orElse(null);
        if(farmer == null){
            throw new Exception("Farmer not found with id "+ id);
        }
        farmer.setProfilePhoto(ImageUtils.compressImage(profilePhoto.getBytes()));
        farmerRepository.save(farmer);
        return modelMapper.map(farmer,FarmerResponseDTO.class);
    }

    @Override
    public void delete(Long id) throws Exception {
        Farmer farmer = farmerRepository.findById(id).orElse(null);
        if(farmer == null){
            throw new Exception("Farmer not found with id "+ id);
        }
        farmerRepository.deleteById(id);
    }

    @Override
    public boolean existsByEmailAndPassword(LoginRequestDTO request) {
        return farmerRepository.existsByEmailAndPassword(request.getEmail(), request.getPassword());
    }

    @Override
    public FarmerResponseDTO findByEmail(String email) {
        return modelMapper.map(farmerRepository.findByEmail(email), FarmerResponseDTO.class);
    }

    @Override
    public List<FarmerResponseDTO> getTopFarmersWithMostProducts() {
        List<Farmer> farmers = farmerRepository.findTopFarmersWithMostProducts();
        for (Farmer farmer: farmers) {
            farmer.setProfilePhoto(ImageUtils.decompressImage(farmer.getProfilePhoto()));
        }
        List<FarmerResponseDTO> response = farmers
                .stream()
                .map(farmer -> modelMapper.map(farmer, FarmerResponseDTO.class))
                .toList();
        return response;
    }
}

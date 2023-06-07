package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.FarmerRequestDTO;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.LoginRequestDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FarmerService {
    FarmerResponseDTO getById(Long id) throws Exception;
    List<FarmerResponseDTO> getAll();
    FarmerResponseDTO add(FarmerRequestDTO farmerRequest);
    FarmerResponseDTO update(FarmerRequestDTO farmerRequest) throws Exception;
    FarmerResponseDTO updateProfilePhoto(Long id, MultipartFile profilePhoto) throws Exception;
    void delete(Long id) throws Exception;
    boolean existsByEmailAndPassword(LoginRequestDTO request);
    FarmerResponseDTO findByEmail(String email);
    List<FarmerResponseDTO> getTopFarmersWithMostProducts();
}

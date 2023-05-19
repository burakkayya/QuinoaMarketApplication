package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.FarmerRequestDTO;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;

import java.util.List;

public interface FarmerService {
    FarmerResponseDTO getById(Long id) throws Exception;
    List<FarmerResponseDTO> getAll();
    FarmerResponseDTO add(FarmerRequestDTO farmerRequest);
    FarmerResponseDTO update(FarmerRequestDTO farmerRequest) throws Exception;
    void delete(Long id) throws Exception;
}

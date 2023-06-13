package com.graduationproject.quinoamarketapp.api.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.graduationproject.quinoamarketapp.business.abstracts.FarmerService;
import com.graduationproject.quinoamarketapp.model.FarmerRequestDTO;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.ProductRequestDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/api/farmers")
public class FarmerController {
    private final FarmerService farmerService;
    private final ObjectMapper objectMapper;

    @GetMapping("/{id}")
    public ResponseEntity<FarmerResponseDTO> getById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(farmerService.getById(id));
    }
    @GetMapping()
    public ResponseEntity<List<FarmerResponseDTO>> getAll(){
        return ResponseEntity.ok(farmerService.getAll());
    }
    @PutMapping("/update")
    public ResponseEntity<FarmerResponseDTO> update(@RequestBody FarmerRequestDTO farmerRequest) throws Exception {
        return ResponseEntity.ok(farmerService.update(farmerRequest));
    }

    @PutMapping("/update-profile-photo/{id}")
    public ResponseEntity<FarmerResponseDTO> updateFarmerProfilePhoto(@PathVariable Long id, @RequestParam("file") MultipartFile profilePhoto) throws Exception {
        return ResponseEntity.ok(farmerService.updateProfilePhoto(id, profilePhoto));
    }

    @PostMapping("/add")
    public ResponseEntity<FarmerResponseDTO> add(@RequestParam("file") MultipartFile file, @RequestParam("farmer") String farmerRequest) throws Exception {
        FarmerRequestDTO farmerRequestDTO = objectMapper.readValue(farmerRequest, FarmerRequestDTO.class);
        return ResponseEntity.ok(farmerService.add(farmerRequestDTO, file));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        farmerService.delete(id);
        return ResponseEntity.ok("Farmer deleted succesfully!");
    }

    @GetMapping("/getTopFarmersWithMostProducts")
    public ResponseEntity<List<FarmerResponseDTO>> getTopFarmersWithMostProducts() {
        return ResponseEntity.ok(farmerService.getTopFarmersWithMostProducts());
    }
}

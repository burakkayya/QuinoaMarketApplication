package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.FarmerService;
import com.graduationproject.quinoamarketapp.model.FarmerRequestDTO;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/api/farmer")
public class FarmerController {
    @Autowired
    private final FarmerService farmerService;

    @GetMapping("/{id}")
    public ResponseEntity<FarmerResponseDTO> getById(@PathVariable Long id) throws Exception {
        FarmerResponseDTO farmerResponse = farmerService.getById(id);
        return ResponseEntity.ok(farmerResponse);
    }
    @GetMapping()
    public ResponseEntity<List<FarmerResponseDTO>> getAll(){
        List<FarmerResponseDTO> farmerResponseList = farmerService.getAll();
        return ResponseEntity.ok(farmerResponseList);
    }
    @PutMapping("/update")
    public ResponseEntity<FarmerResponseDTO> update(@RequestBody FarmerRequestDTO farmerRequest) throws Exception {
        FarmerResponseDTO farmerResponse = farmerService.update(farmerRequest);
        return ResponseEntity.ok(farmerResponse);
    }

    @PutMapping("/{id}/update-profile-photo")
    public ResponseEntity<FarmerResponseDTO> updateFarmerProfilePhoto(@PathVariable Long id, @RequestParam("file") MultipartFile profilePhoto) throws Exception {
        FarmerResponseDTO farmerResponse = farmerService.updateProfilePhoto(id, profilePhoto);
        return ResponseEntity.ok(farmerResponse);
    }

    @PostMapping("/add")
    public ResponseEntity<FarmerResponseDTO> add(@RequestBody FarmerRequestDTO farmerRequest){
        FarmerResponseDTO farmerResponse = farmerService.add(farmerRequest);
        return ResponseEntity.ok(farmerResponse);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        farmerService.delete(id);
        return ResponseEntity.ok("Farmer deleted succesfully!");
    }
}

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
@RequestMapping("/api/farmers")
public class FarmerController {
    @Autowired
    private final FarmerService farmerService;

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

    @PutMapping("/{id}/update-profile-photo")
    public ResponseEntity<FarmerResponseDTO> updateFarmerProfilePhoto(@PathVariable Long id, @RequestParam("file") MultipartFile profilePhoto) throws Exception {
        return ResponseEntity.ok(farmerService.updateProfilePhoto(id, profilePhoto));
    }

    @PostMapping("/add")
    public ResponseEntity<FarmerResponseDTO> add(@RequestBody FarmerRequestDTO farmerRequest){
        return ResponseEntity.ok(farmerService.add(farmerRequest));
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

package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.ImageService;
import com.graduationproject.quinoamarketapp.dto.responses.ImageFileResponseDTO;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/images")
public class ImagesController {
    private final ImageService imageService;

    @PostMapping
    public ImageFileResponseDTO add(@RequestParam("file") MultipartFile file) throws IOException {
        return imageService.add(file);
    }

    @GetMapping("/{id}")
    public ImageFileResponseDTO getById(@PathVariable Long id) {
        return imageService.getById(id);
    }

    @GetMapping
    public List<ImageFileResponseDTO> getAll() {
        return imageService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        imageService.delete(id);
    }

    @PostMapping("/predict")
    public String predict(@RequestParam("file") MultipartFile file) {
        try {
            return imageService.predict(file);
        } catch (IOException e) {
            return new String("Error predicting image");
        }
    }

}

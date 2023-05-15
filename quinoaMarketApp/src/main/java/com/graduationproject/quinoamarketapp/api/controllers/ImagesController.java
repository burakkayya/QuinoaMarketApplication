package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.ImageService;
import com.graduationproject.quinoamarketapp.entity.ImageFile;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/images")
public class ImagesController {

    @Autowired
    private final ImageService imageService;

    @PostMapping
    public byte[] add(@RequestParam("file") MultipartFile file) throws IOException {
        return imageService.add(file);
        //return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.valueOf("image/jpg")).body(image);
    }

    @GetMapping("/{id}")
    public byte[] getById(@PathVariable Long id) {
        return imageService.getById(id);
        //return ResponseEntity.status(HttpStatus.OK).body(image);
    }

    @GetMapping("/getByName/{name}")
    public byte[] getByName(@PathVariable String name) {
        return imageService.getByName(name);
        //return ResponseEntity.status(HttpStatus.OK).body(image);
    }

    @GetMapping
    public List<byte[]> getAll() {
        return imageService.getAll();
        //return ResponseEntity.status(HttpStatus.OK).body(imageList);
    }

    @PostMapping("/predict")
    public String predict(@RequestParam("file") MultipartFile file) {
        try {
            return imageService.predict(file);
            //return ResponseEntity.status(HttpStatus.OK).body(prediction);
        } catch (IOException e) {
            return new String("Error predicting image");
        }
    }

}

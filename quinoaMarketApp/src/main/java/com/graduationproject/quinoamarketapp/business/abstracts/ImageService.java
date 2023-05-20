package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.dto.responses.ImageFileResponseDTO;
import com.graduationproject.quinoamarketapp.entity.ImageFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    ImageFileResponseDTO add(MultipartFile file) throws IOException;
    ImageFileResponseDTO getById(Long id);
    List<ImageFileResponseDTO> getAll();
    void delete(Long id);
    String predict(MultipartFile file) throws IOException;
}

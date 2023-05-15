package com.graduationproject.quinoamarketapp.business.abstracts;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    byte[] add(MultipartFile file) throws IOException;
    byte[] getById(Long id);
    byte[] getByName(String name);
    List<byte[]> getAll();
    String predict(MultipartFile file) throws IOException;
}

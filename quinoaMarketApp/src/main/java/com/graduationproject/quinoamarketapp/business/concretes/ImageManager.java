package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.ImageService;
import com.graduationproject.quinoamarketapp.dto.responses.ImageFileResponseDTO;
import com.graduationproject.quinoamarketapp.repository.ImageRepository;
import com.graduationproject.quinoamarketapp.entity.ImageFile;
import lombok.AllArgsConstructor;
import org.apache.http.HttpEntity;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@AllArgsConstructor
@Service
public class ImageManager implements ImageService {
    private final ImageRepository imageRepository;
    private final ModelMapper mapper;

    @Override
    public ImageFileResponseDTO add(MultipartFile file) throws IOException{
        byte[] imageBytes = file.getBytes();

        ImageFile image= imageRepository.save(ImageFile.builder()
                        .name(file.getOriginalFilename())
                        .type(file.getContentType())
                        .imageData(file.getBytes()).build());

        if(image != null){
            ImageFile dbImageFile = imageRepository.findById(image.getId()).orElseThrow();
            ImageFileResponseDTO response = mapper.map(dbImageFile, ImageFileResponseDTO.class);
            return  response;
        }
        return null;

    }

    @Override
    public ImageFileResponseDTO getById(Long id) {
        ImageFile dbImageFile = imageRepository.findById(id).orElseThrow();
        ImageFileResponseDTO response = mapper.map(dbImageFile, ImageFileResponseDTO.class);
        return  response;
        //return ImageUtils.decompressImage(dbImageFile.get().getImageData());
    }

    @Override
    public List<ImageFileResponseDTO> getAll() {
        List<ImageFile> brands = imageRepository.findAll();
        List<ImageFileResponseDTO> responses = brands
                .stream()
                .map(brand -> mapper.map(brand, ImageFileResponseDTO.class))
                .toList();
        return responses;
    }

    @Override
    public void delete(Long id) {
        imageRepository.deleteById(id);
    }

    @Override
    public String predict(MultipartFile file) throws IOException {
        // Convert MultipartFile to byte array
        byte[] imageBytes = file.getBytes();

        // Convert the byte array to a Base64-encoded string
        String base64EncodedImage = Base64.getEncoder().encodeToString(imageBytes);

        // Create POST request
        HttpClient httpclient = HttpClients.createDefault();
        HttpPost httppost = new HttpPost("http://localhost:8000/predict");
        HttpEntity entity = MultipartEntityBuilder.create()
                .setMode(HttpMultipartMode.BROWSER_COMPATIBLE)
                .addBinaryBody("image", imageBytes, ContentType.DEFAULT_BINARY, "image.jpg")
                .build();
        httppost.setEntity(entity);

        // Send the POST request and read the response
        HttpEntity responseEntity = httpclient.execute(httppost).getEntity();
        String responseString = EntityUtils.toString(responseEntity);

        ImageFile image=new ImageFile();
        image.setName(file.getOriginalFilename());
        image.setType(file.getContentType());
        image.setImageData(imageBytes);
        imageRepository.save(image);

        // Return the prediction
        System.out.println("Prediction: " + responseString);
        return responseString;
    }
}

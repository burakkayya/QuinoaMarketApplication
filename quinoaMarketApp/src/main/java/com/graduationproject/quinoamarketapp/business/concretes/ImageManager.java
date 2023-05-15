package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.ImageService;
import com.graduationproject.quinoamarketapp.repository.ImageRepository;
import com.graduationproject.quinoamarketapp.entity.ImageFile;
import com.graduationproject.quinoamarketapp.util.ImageUtils;
import lombok.AllArgsConstructor;
import org.apache.http.HttpEntity;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ImageManager implements ImageService {
    private ImageRepository imageRepository;

    @Override
    public byte[] add(MultipartFile file) throws IOException{
        byte[] imageBytes = file.getBytes();

        ImageFile image= imageRepository.save(ImageFile.builder()
                        .name(file.getOriginalFilename())
                        .type(file.getContentType())
                        .imageData(ImageUtils.compressImage(file.getBytes())).build());

        if(image != null){
            Optional<ImageFile> dbImageFile = imageRepository.findById(image.getId());
            return  dbImageFile.get().getImageData();
            //return ImageUtils.decompressImage(dbImageFile.get().getImageData());
        }
        return null;

    }

    @Override
    public byte[] getById(Long id) {
        Optional<ImageFile> dbImageFile = imageRepository.findById(id);
        return  dbImageFile.get().getImageData();
        //return ImageUtils.decompressImage(dbImageFile.get().getImageData());
    }

    @Override
    public byte[] getByName(String name) {
        Optional<ImageFile> dbImageFile = imageRepository.findByName(name);
        return  dbImageFile.get().getImageData();
        //return ImageUtils.decompressImage(dbImageFile.get().getImageData());
    }

    @Override
    public List<byte[]> getAll() {
        List<byte[]> result= new ArrayList<>();
        for(ImageFile dbImageFile : imageRepository.findAll()) {
            byte[] bytes= dbImageFile.getImageData();//ImageUtils.decompressImage(dbImageFile.getImageData());
            result.add(bytes);
        }
        return result;
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

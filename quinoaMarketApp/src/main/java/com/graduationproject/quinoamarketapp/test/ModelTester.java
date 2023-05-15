package com.graduationproject.quinoamarketapp.test;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;

import org.apache.http.HttpEntity;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class ModelTester {
    /*public static void testModel() throws IOException {
        HttpClient httpclient = HttpClients.createDefault();

        // URL of the FastAPI endpoint
        HttpPost httppost = new HttpPost("http://localhost:8000/predict");

        // Read the image file into a byte array
        File file = new File("src/main/java/com/graduationproject/quinoamarketapp/images/Inia_431_Altpleno.jpg");
        byte[] imageBytes = Files.readAllBytes(file.toPath());

        // Convert the byte array to a Base64-encoded string
        String base64EncodedImage = Base64.getEncoder().encodeToString(imageBytes);

        // Add the image as a form field to the POST request
        HttpEntity entity = MultipartEntityBuilder.create()
                .setMode(HttpMultipartMode.BROWSER_COMPATIBLE)
                .addBinaryBody("image", imageBytes, ContentType.DEFAULT_BINARY, "image.jpg")
                .build();

        httppost.setEntity(entity);

        // Send the POST request and read the response
        HttpEntity responseEntity = httpclient.execute(httppost).getEntity();
        String responseString = EntityUtils.toString(responseEntity);
        System.out.println(responseString);
    }*/
}

package com.havixpage.havixpage.services.images;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Properties;

public class ImageRepositoryController {
    private String imageRepositoryPath;

    public ImageRepositoryController() {
        try (InputStream input  = new FileInputStream("src/main/resources/application.properties")) {
            Properties prop = new Properties();
            prop.load(input);

            imageRepositoryPath = prop.getProperty("repository.location");

        } catch (IOException io) {
            io.printStackTrace();
        }
    }

    public ResponseEntity<Resource> getImage(String filePath) {
        String stringPath = imageRepositoryPath+"\\"+filePath;

        try {
            File file = new File(stringPath);
            Path path = Paths.get(file.getAbsolutePath());

            ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));
            HttpHeaders headers = new HttpHeaders();
            headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
            headers.add("Pragma", "no-cache");
            headers.add("Expires", "0");

            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(file.length())
                    .contentType(MediaType.IMAGE_PNG)
                    .body(resource);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException exception) {
            exception.printStackTrace();
        }

        return null;
    }
}

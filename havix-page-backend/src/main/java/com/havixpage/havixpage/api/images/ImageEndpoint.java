package com.havixpage.havixpage.api.images;

import com.havixpage.havixpage.services.images.ImageRepositoryController;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageEndpoint {
    private final ImageRepositoryController controller;

    ImageEndpoint(){
        controller = new ImageRepositoryController();
    }

    @GetMapping
    ResponseEntity<Resource> getImage(@RequestParam("path") String path) {
        return controller.getImage(path);
    }
}


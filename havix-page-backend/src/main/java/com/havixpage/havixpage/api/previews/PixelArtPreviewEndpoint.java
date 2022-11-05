package com.havixpage.havixpage.api.previews;

import com.havixpage.havixpage.services.previews.PixelArtPreviewRepositoryController;
import com.havixpage.havixpage.services.previews.PixelArtPreviewRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/previews")
public class PixelArtPreviewEndpoint {
    private final PixelArtPreviewRepositoryController controller;

    PixelArtPreviewEndpoint(PixelArtPreviewRepository repository){
        controller = new PixelArtPreviewRepositoryController(repository);
    }

    @GetMapping
    PixelArt getPreview(@RequestParam("path") String path) {
        return controller.getPreview(path);
    }

    @GetMapping("/getAll")
    List<PixelArt> getAllPreviews() {
        return controller.getAllPreviews();
    }
}

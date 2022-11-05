package com.havixpage.havixpage.api.spriteSheets;

import com.havixpage.havixpage.api.previews.PixelArt;
import com.havixpage.havixpage.services.previews.PixelArtPreviewRepository;
import com.havixpage.havixpage.services.previews.PixelArtPreviewRepositoryController;
import com.havixpage.havixpage.services.spriteSheets.SpriteSheetRepository;
import com.havixpage.havixpage.services.spriteSheets.SpriteSheetRepositoryController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/spriteSheets")
public class SpriteSheetEndpoint {
    private final SpriteSheetRepositoryController controller;

    private SpriteSheetEndpoint(SpriteSheetRepository repository){
        controller = new SpriteSheetRepositoryController(repository);
    }

    @GetMapping
    List<SpriteSheet> getAllSpriteSheetAnimations(@RequestParam("path") String path) {
        return controller.getSpriteSheetAnimationsData(path);
    }
}
package com.havixpage.havixpage.services.spriteSheets;

import com.havixpage.havixpage.api.previews.PixelArt;
import com.havixpage.havixpage.api.spriteSheets.SpriteSheet;
import com.havixpage.havixpage.services.previews.PixelArtPreviewRepository;

import java.util.List;

public class SpriteSheetRepositoryController {
    private final SpriteSheetRepository repository;

    public SpriteSheetRepositoryController(SpriteSheetRepository repository){
        this.repository = repository;
    }

    public List<SpriteSheet> getSpriteSheetAnimationsData(String path) {
        List<SpriteSheet> data = repository.getAllSpriteSheetsAnimations(path);

        return data;
    }

}

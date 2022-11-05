package com.havixpage.havixpage.services.previews;

import com.havixpage.havixpage.api.previews.PixelArt;

import java.util.List;

public class PixelArtPreviewRepositoryController {
    private final PixelArtPreviewRepository repository;

    public PixelArtPreviewRepositoryController(PixelArtPreviewRepository repository){
        this.repository = repository;
    }

    public PixelArt getPreview(String path) {
        return repository.findById(path).get();
    }

    public List<PixelArt> getAllPreviews() {
        return repository.findAll();
    }
}

package com.havixpage.havixpage.services.previews;

import com.havixpage.havixpage.api.previews.PixelArt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PixelArtPreviewRepository extends JpaRepository<PixelArt, String> {
}

package com.havixpage.havixpage.services.spriteSheets;

import com.havixpage.havixpage.api.spriteSheets.SpriteSheet;
import com.havixpage.havixpage.api.spriteSheets.SpriteSheetKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SpriteSheetRepository extends JpaRepository<SpriteSheet, SpriteSheetKey> {
    @Query(value = "SELECT * FROM spriteSheet WHERE spriteSheet.path = :path", nativeQuery = true)
    List<SpriteSheet> getAllSpriteSheetsAnimations (@Param("path") String path);
}

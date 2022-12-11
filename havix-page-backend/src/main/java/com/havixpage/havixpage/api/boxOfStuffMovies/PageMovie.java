package com.havixpage.havixpage.api.boxOfStuffMovies;

import com.havixpage.havixpage.api.spriteSheets.SpriteSheetKey;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@IdClass(PageMovieKey.class)
public class PageMovie {
    @Id
    private String pageId;
    @Id
    private int number;

    private String url;
}

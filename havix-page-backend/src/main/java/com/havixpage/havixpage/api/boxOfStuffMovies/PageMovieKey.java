package com.havixpage.havixpage.api.boxOfStuffMovies;

import com.havixpage.havixpage.api.spriteSheets.SpriteSheetKey;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
public class PageMovieKey implements Serializable {
    protected String pageId;

    protected int number;

    public PageMovieKey () {}

    public PageMovieKey (String pageId, int number) {
        this.pageId = pageId;
        this.number = number;
    }

    @Override
    public boolean equals(Object obj) {
        if ( this == obj ) {
            return true;
        }
        if ( obj == null || getClass() != obj.getClass() ) {
            return false;
        }
        PageMovieKey pk = (PageMovieKey) obj;
        return Objects.equals( pageId, pk.pageId ) &&
                Objects.equals( number, pk.number );
    }

    @Override
    public int hashCode() {
        return Objects.hash( pageId, number );
    }
}

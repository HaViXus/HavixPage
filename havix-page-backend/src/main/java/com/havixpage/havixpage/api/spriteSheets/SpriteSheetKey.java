package com.havixpage.havixpage.api.spriteSheets;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
public class SpriteSheetKey implements Serializable {
    protected String path;

    protected int number;

    public SpriteSheetKey () {}

    public SpriteSheetKey (String path, int number) {
        this.path = path;
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
        SpriteSheetKey pk = (SpriteSheetKey) obj;
        return Objects.equals( path, pk.path ) &&
                Objects.equals( number, pk.number );
    }

    @Override
    public int hashCode() {
        return Objects.hash( path, number );
    }
}

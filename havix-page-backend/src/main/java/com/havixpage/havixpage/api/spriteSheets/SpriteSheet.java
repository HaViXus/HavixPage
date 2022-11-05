package com.havixpage.havixpage.api.spriteSheets;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@IdClass(SpriteSheetKey.class)
public class SpriteSheet implements Serializable {
    @Id
    private String path;
    @Id
    private int number;

    private int x;

    private int y;

    private int width;

    private int height;

    private int frames;
}
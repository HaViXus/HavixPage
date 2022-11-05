package com.havixpage.havixpage.api.previews;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name="pixel_art")
public class PixelArt {
    @Id
    private String path;

    private String title;

    private String description;
}

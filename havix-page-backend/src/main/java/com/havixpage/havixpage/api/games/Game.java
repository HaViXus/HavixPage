package com.havixpage.havixpage.api.games;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Game {
    @Id
    private String name;

    private Boolean available;

    private String description;

    private String controls;
}

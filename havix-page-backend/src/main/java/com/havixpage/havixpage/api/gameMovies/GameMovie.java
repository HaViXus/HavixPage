package com.havixpage.havixpage.api.gameMovies;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name="game_movie")
public class GameMovie {
    @Id
    private String id;

    private String game;

    private String url;
}

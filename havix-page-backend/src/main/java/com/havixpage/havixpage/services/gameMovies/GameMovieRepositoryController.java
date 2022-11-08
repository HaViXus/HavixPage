package com.havixpage.havixpage.services.gameMovies;

import com.havixpage.havixpage.api.gameMovies.GameMovie;

import java.util.List;
import java.util.stream.Collectors;

public class GameMovieRepositoryController {
    private final GameMovieRepository repository;

    public GameMovieRepositoryController(GameMovieRepository repository){
        this.repository = repository;
    }

    public List<GameMovie> getAll(String gameName){
        List<GameMovie> gameMovies = repository.findAll().stream()
                .filter(gameMovie -> gameMovie.getGame().equals(gameName))
                .collect(Collectors.toList());

        return gameMovies;
    }
}

package com.havixpage.havixpage.services.boxOfStuffMovies;

import com.havixpage.havixpage.api.boxOfStuffMovies.PageMovie;
import java.util.List;
import java.util.stream.Collectors;

public class BoxOfStuffMoviesController {
    private final BoxOfStuffMoviesRepository repository;

    public BoxOfStuffMoviesController(BoxOfStuffMoviesRepository repository){
        this.repository = repository;
    }

    public List<PageMovie> getAll(String pageId){
        List<PageMovie> gameMovies = repository.findAll().stream()
                .filter(gameMovie -> gameMovie.getPageId().equals(pageId))
                .collect(Collectors.toList());

        return gameMovies;
    }
}

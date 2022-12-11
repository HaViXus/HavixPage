package com.havixpage.havixpage.api.boxOfStuffMovies;

import com.havixpage.havixpage.api.gameMovies.GameMovie;
import com.havixpage.havixpage.services.boxOfStuffMovies.BoxOfStuffMoviesController;
import com.havixpage.havixpage.services.boxOfStuffMovies.BoxOfStuffMoviesRepository;
import com.havixpage.havixpage.services.gameMovies.GameMovieRepository;
import com.havixpage.havixpage.services.gameMovies.GameMovieRepositoryController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/boxOfStuffMovies")
public class PageMovieEndpoint {
    private final BoxOfStuffMoviesController controller;

    PageMovieEndpoint(BoxOfStuffMoviesRepository repository){
        controller = new BoxOfStuffMoviesController(repository);
    }

    @GetMapping("/get")
    List<PageMovie> getAll(@RequestParam("pageId") String pageId) {
        return controller.getAll(pageId);
    }
}

package com.havixpage.havixpage.api.gameMovies;

import com.havixpage.havixpage.services.gameMovies.GameMovieRepository;
import com.havixpage.havixpage.services.gameMovies.GameMovieRepositoryController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/gameMovies")
public class GameMovieEndpoint {
    private final GameMovieRepositoryController controller;

    GameMovieEndpoint(GameMovieRepository repository){
        controller = new GameMovieRepositoryController(repository);
    }

    @GetMapping("/get")
    List<GameMovie> getAll(@RequestParam("gameName") String gameName) {
        return controller.getAll(gameName);
    }
}

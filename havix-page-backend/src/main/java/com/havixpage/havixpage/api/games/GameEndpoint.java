package com.havixpage.havixpage.api.games;

import com.havixpage.havixpage.services.games.GameRepository;
import com.havixpage.havixpage.services.games.GameRepositoryController;
import com.havixpage.havixpage.services.images.ImageRepositoryController;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/games")
public class GameEndpoint {
    private final GameRepositoryController controller;

    GameEndpoint(GameRepository repository){
        controller = new GameRepositoryController(repository);
    }

    @GetMapping("/getAll")
    List<Game> getAll() {
        return controller.getAll();
    }

    @GetMapping("/getAllNames")
    List<String> getAllGamesNames() {
        return controller.getAllGamesNames();
    }

    @GetMapping("/get")
    Game getGame(@RequestParam("gameName") String gameName) {
        return controller.getGame(gameName);
    }

    @GetMapping("/getCover")
    ResponseEntity<Resource> getCover(@RequestParam("gameName") String gameName) {
        return controller.getCover(gameName);
    }

    @GetMapping("/getAllCoversPaths")
    List<String> getAllCoversPaths() {
        return controller.getAllCoversPaths();
    }


    @GetMapping("/getAllImagesNames")
    List<String> getAll(@RequestParam("gameName") String gameName) {
        return controller.getAllImagesNames(gameName);
    }

    @GetMapping("/getGameFile")
    ResponseEntity<Resource> getGameFile(@RequestParam("gameName") String gameName) {
        return controller.getGameFile(gameName);
    }
}

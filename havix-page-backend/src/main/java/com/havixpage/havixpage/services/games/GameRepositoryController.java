package com.havixpage.havixpage.services.games;

import com.havixpage.havixpage.api.games.Game;
import com.havixpage.havixpage.services.images.ImageRepositoryController;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.io.*;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

public class GameRepositoryController {
    private final GameRepository repository;
    private final ImageRepositoryController imagesRepository;
    private String gamesLocation;

    public GameRepositoryController(GameRepository repository){
        this.repository = repository;
        imagesRepository = new ImageRepositoryController();
        try (InputStream input  = new FileInputStream("src/main/resources/application.properties")) {
            Properties prop = new Properties();
            prop.load(input);

            gamesLocation = prop.getProperty("games.location");

        } catch (IOException io) {
            io.printStackTrace();
        }

    }

    public List<Game> getAll(){
        return repository.findAll();
    }

    public List<String> getAllGamesNames() {
        List<String> gamesNames = repository.findAll().stream().map(game -> game.getName())
                .collect(Collectors.toList());

        return gamesNames;
    }

    public Game getGame(String name) {
        Game game = repository.findAll().stream().filter(singleGame -> singleGame.getName().equals(name))
                .findFirst().get();
        return game;
    }

    public ResponseEntity<Resource> getCover(String gameName) {
        String path = "game\\" + gameName + "\\cover.png";
        return imagesRepository.getImage(path);
    }

    public List<String> getAllCoversPaths() {
        File file = new File(gamesLocation);
        String[] directories = file.list(new FilenameFilter() {
            @Override
            public boolean accept(File current, String name) {
                return new File(current, name).isDirectory();
            }
        });
        List<String> listOfCoversPaths = Arrays.stream(directories).map(game -> game += "\\cover.png")
                .collect(Collectors.toList());

        return listOfCoversPaths;
    }

    public List<String> getAllImagesNames( String gameName) {
        String path = "game\\" + gameName + "\\details";
        return imagesRepository.getAllCategoryImagesName(path);
    }
}

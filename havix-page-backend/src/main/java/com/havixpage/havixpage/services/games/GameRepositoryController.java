package com.havixpage.havixpage.services.games;

import com.havixpage.havixpage.api.games.Game;
import com.havixpage.havixpage.services.images.ImageRepositoryController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

public class GameRepositoryController {
    private final GameRepository repository;
    private final ImageRepositoryController imagesRepository;
    private String gameFileRepositoryPath;
    private String gamesLocation;

    public GameRepositoryController(GameRepository repository){
        this.repository = repository;
        imagesRepository = new ImageRepositoryController();
        try (InputStream input  = new FileInputStream("src/main/resources/application.properties")) {
            Properties prop = new Properties();
            prop.load(input);

            gamesLocation = prop.getProperty("games.location");
            gameFileRepositoryPath = prop.getProperty("games.files.location");

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

    public ResponseEntity<Resource> getGameFile(String filePath) {
        String stringPath = gameFileRepositoryPath+"\\"+filePath;

        try {
            File file = new File(stringPath);
            Path path = Paths.get(file.getAbsolutePath());

            InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
            String mimeType = Files.probeContentType(path);
            //ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));
            //HttpHeaders headers = new HttpHeaders();
            //headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
            //headers.add("Pragma", "no-cache");
            //headers.add("Expires", "0");

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                    .contentLength(file.length())
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(resource);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException exception) {
            exception.printStackTrace();
        }

        return null;
    }
}

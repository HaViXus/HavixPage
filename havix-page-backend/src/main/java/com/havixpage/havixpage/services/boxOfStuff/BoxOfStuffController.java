package com.havixpage.havixpage.services.boxOfStuff;

import com.havixpage.havixpage.api.boxOfStuff.BoxOfStuffPage;
import com.havixpage.havixpage.api.boxOfStuff.BoxOfStuffPageMeta;
import com.havixpage.havixpage.services.filter.FilterData;
import com.havixpage.havixpage.services.images.ImageRepositoryController;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Properties;


public class BoxOfStuffController {
    private final BoxOfStuffRepository repository;
    private final ImageRepositoryController imagesRepository;
    private String imageRepositoryPath;

    public BoxOfStuffController(BoxOfStuffRepository repository){
        this.repository = repository;
        imagesRepository = new ImageRepositoryController();
        try (InputStream input  = new FileInputStream("src/main/resources/application.properties")) {
            Properties prop = new Properties();
            prop.load(input);

            imageRepositoryPath = prop.getProperty("repository.location");

        } catch (IOException io) {
            io.printStackTrace();
        }
    }

    public Page<BoxOfStuffPageMeta> getListOfPages(int pageNumber, int pageSize, List<FilterData> filters) {
        Pageable pageOfList = PageRequest.of(pageNumber, pageSize);

        Page<BoxOfStuffPage> pages = repository.findByFilters(filters, BoxOfStuffPage.class, pageOfList);

        Page<BoxOfStuffPageMeta> pagesToReturn = pages.map(source -> {
            BoxOfStuffPageMeta metadata = BoxOfStuffPageMeta.builder().id(source.getId())
                    .title(source.getTitle())
                    .tags(source.getTags())
                    .date(source.getDate())
                    .shortDescription(source.getShortDescription())
                    .build();
            return metadata;
        });

        return pagesToReturn;
    }

    public BoxOfStuffPage getPage(String id) {
        Optional<BoxOfStuffPage> page = repository.findById(id);

        if(page.isPresent()) {
            return page.get();
        } else {
            return null;
        }
    }

    public List<String> getAllImagesNames(String gameName) {
        String path = "game\\" + gameName + "\\details";
        return imagesRepository.getAllCategoryImagesName(path);
    }

    public List<String> getAllImages(String id) {
        String path = "page\\" + id + "\\page";
        return imagesRepository.getAllCategoryImagesName(path);
    }

    public ResponseEntity<Resource> getPageCover(String id) {
        String path = "page\\" + id + "\\cover.png";
        ResponseEntity<Resource> pageCover = imagesRepository.getImage(path);
        if(pageCover == null) {
            String defaultImagePath = "page\\defaultBOSCover.png";
            pageCover = imagesRepository.getImage(defaultImagePath);
        }
        return pageCover;
    }



}

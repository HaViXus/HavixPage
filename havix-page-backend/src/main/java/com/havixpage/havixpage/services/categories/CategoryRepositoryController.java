package com.havixpage.havixpage.services.categories;

import com.havixpage.havixpage.api.categories.Category;
import com.havixpage.havixpage.api.categories.CategoryFull;
import com.havixpage.havixpage.services.images.ImageRepositoryController;

import java.util.ArrayList;
import java.util.List;

public class CategoryRepositoryController {
    private final CategoryRepository repository;
    private final ImageRepositoryController imagesRepository;

    public CategoryRepositoryController(CategoryRepository repository){
        this.repository = repository;
        imagesRepository = new ImageRepositoryController();
    }

    public List<Category> getAll(){
        return repository.findAll();
    }
}

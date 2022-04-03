package com.havixpage.havixpage.api.categories;

import com.havixpage.havixpage.services.categories.CategoryRepositoryController;
import com.havixpage.havixpage.services.categories.CategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryEndpoint {
    private final CategoryRepositoryController controller;

    CategoryEndpoint(CategoryRepository repository){
        controller = new CategoryRepositoryController(repository);
    }

    @GetMapping("/categories")
    List<Category> getAll() {
        return controller.getAll();
    }
}

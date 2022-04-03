package com.havixpage.havixpage.api.categories;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryFull {
    private String title;

    private byte[] image;

    public void convertCategoryToFullCategory(Category category) {
        this.title = category.getTitle();
    }
}

package com.havixpage.havixpage.services.categories;

import com.havixpage.havixpage.api.categories.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, String> {

}

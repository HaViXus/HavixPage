package com.havixpage.havixpage.services.boxOfStuffMovies;

import com.havixpage.havixpage.api.boxOfStuffMovies.PageMovie;
import com.havixpage.havixpage.api.gameMovies.GameMovie;
import com.havixpage.havixpage.services.gameMovies.GameMovieRepository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.stream.Collectors;

public interface BoxOfStuffMoviesRepository extends JpaRepository<PageMovie, String> {

}

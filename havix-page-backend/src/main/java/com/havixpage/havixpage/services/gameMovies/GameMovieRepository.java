package com.havixpage.havixpage.services.gameMovies;

import com.havixpage.havixpage.api.gameMovies.GameMovie;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GameMovieRepository extends JpaRepository<GameMovie, String> {

}

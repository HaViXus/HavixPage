package com.havixpage.havixpage.services.games;

import com.havixpage.havixpage.api.games.Game;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GameRepository extends JpaRepository<Game, String> {

}

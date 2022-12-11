package com.havixpage.havixpage.api.boxOfStuff;

import com.havixpage.havixpage.services.filter.Filter;
import com.havixpage.havixpage.services.filter.FilterData;
import com.havixpage.havixpage.services.boxOfStuff.BoxOfStuffController;
import com.havixpage.havixpage.services.boxOfStuff.BoxOfStuffRepository;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/boxOfStuff")
public class BoxOfStuffEndpoint {
    private final BoxOfStuffController controller;

    BoxOfStuffEndpoint(BoxOfStuffRepository repository){
        controller = new BoxOfStuffController(repository);
    }

    @PostMapping("/getListOfPages")
    public Page<BoxOfStuffPageMeta> getListOfPages(@RequestParam("pageNumber")  int pageNumber,
       @RequestParam("pageSize")int pageSize,
       @RequestBody(required = false) Filter filters)
    {
        return controller.getListOfPages(pageNumber, pageSize, filters.getFilters());
    }

    @GetMapping("/getPage/{id}")
    public BoxOfStuffPage getPage(@PathVariable("id") String id) {
        return controller.getPage(id);
    }

    @GetMapping("/getAllImagesNames")
    public List<String> getAllImages(@RequestParam("id") String id) {
        return controller.getAllImages(id);
    }

    @GetMapping("/getPageCover")
    public ResponseEntity<Resource> getPageCover(@RequestParam("id") String id) {
        return controller.getPageCover(id);
    }


}

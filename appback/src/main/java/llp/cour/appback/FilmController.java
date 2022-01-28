package llp.cour.appback;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FilmController {

    @Autowired
    private FilmService filmService;
    
    
    @GetMapping("/films/{name}")
    @ResponseBody
    public List<Object> getFilmByName(@PathVariable("name") String name) {
    	
    	return filmService.getFilmByName("test");

    }

    @PostMapping(path="/saveRequest")
    public void saveRequest(@RequestBody String request) {
        
    	filmService.saveRequest(request);
    	
    }


}

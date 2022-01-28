package llp.cour.appback;

import java.net.http.HttpClient;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpLogging;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Service
public class FilmService {

    @Autowired
    public FilmRepository filmRepository;
    
    public List<Object> getFilmByName(String name) {

    	String url = "https://api.themoviedb.org/3/search/movie?api_key=a66216d24c5d970cb5cb3e4ae1ba1a16&language=en-US&query=" + name + "&page=1&include_adult=false";
    	
    	RestTemplate restTemplate = new RestTemplate();
    	Object films = restTemplate.getForObject(url, Object[].class);
        System.out.println(films);
    	return Arrays.asList(films);
    }


	public void saveRequest(String request) {
		// TODO Auto-generated method stub
		
	}
    
    
}
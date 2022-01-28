import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(choice: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=a66216d24c5d970cb5cb3e4ae1ba1a16&language=en-US&query=${choice}&page=1&include_adult=false`, {
      responseType: "text",
    });
  }

  // sendCommand(transaction: transaction) {
  //   const cmd = new Commande();
  //   cmd.boisson = transaction.choice;
  //   cmd.sucre = transaction.sugar;
  //   return this.http.post<Commande>("http://localhost:8081/commande", cmd);
  // }
}

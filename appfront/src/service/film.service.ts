import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(choice: string) {
    return this.http.get(`http://localhost:8081/${choice}`, {
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

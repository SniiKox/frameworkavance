import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { FilmService } from 'src/service/film.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-choix",
  templateUrl: "./choix.component.html",
  styleUrls: ["./choix.component.scss"],
})
export class ChoixComponent implements OnInit {
  search: string = '';
  public films: any;
  public missingField = false;
  private sublist: Array<Subscription> = [];

  constructor(
    private filmService: FilmService
  ) {}

  ngOnInit(): void {}

  tri(arr, name) {
    return arr.filter(el => {
      return el.original_title === name;
    });
  }

  onSubmit() {
      this.search = (<HTMLInputElement>document.getElementById("search")).value
      this.sublist.push(
        this.filmService.getFilms(this.search).subscribe(
          (res) => {
            this.films = res;
            this.films = this.tri(this.films, this.search)
            console.log(this.films)
          },
          (err) => {
            console.log(err);
          }
        )
      );
  }

    //   this.sublist.push(
    //     this.paymentService.receiveTransaction(this.transaction).subscribe(
    //       (res) => {
    //         if (res) {
    //           console.log("paiement fini");
    //           this.transaction.state = "PRODUCING";

    //           this.sublist.push(
    //             this.prodService
    //               .startProduction(this.transaction)
    //               .subscribe((res) => {
    //                 this.pubService.sendCommand(this.transaction).subscribe(
    //                   (res) => {},
    //                   (err) => {
    //                     console.log(err);
    //                   }
    //                 );
    //                 this.resetTransaction();
    //               })
    //           );
    //         }
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     )
    //   );
    // } else {
    //   this.missingField = true;
    // }

}

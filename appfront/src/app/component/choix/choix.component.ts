import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { FilmService } from 'src/service/film.service';
import { search } from 'src/model/search';

@Component({
  selector: "app-choix",
  templateUrl: "./choix.component.html",
  styleUrls: ["./choix.component.scss"],
})
export class ChoixComponent implements OnInit {
  public films: any;
  public missingField = false;
  private sublist: Array<Subscription> = [];

  constructor(
    private filmService: FilmService
  ) {}

  @Input() search: search;
  @Output() searchChange = new EventEmitter();

  ngOnInit(): void {}

  choose($event) {
    this.search.name = $event;
  }

  submit() {
      this.sublist.push(
        this.filmService.getFilms(this.search.name).subscribe(
          (res) => {
            this.films = res;
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

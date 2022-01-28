import { Component, OnInit } from "@angular/core";
import { search } from 'src/model/search';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "appfront";

  public search: search;

  ngOnInit() {
    this.search = {
      name: null
    }
  }

  showWaiting($event) {
    this.search = $event
  }
}

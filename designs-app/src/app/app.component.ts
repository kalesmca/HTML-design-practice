import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "designs-app";
  sidenavList = [
    { path: "../assets/fb.svg", name: "Facebook" },
    { path: "../assets/instagram.svg", name: "Instagram" },
    { path: "../assets/placeholder.svg", name: "Locations" },
  ];
}

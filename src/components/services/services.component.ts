import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-services',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
}

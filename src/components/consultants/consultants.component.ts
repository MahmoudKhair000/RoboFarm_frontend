import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-consultants',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './consultants.component.html',
  styleUrl: './consultants.component.css'
})
export class ConsultantsComponent {
  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
}

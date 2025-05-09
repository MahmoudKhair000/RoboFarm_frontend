import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agrinfo',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './agrinfo.component.html',
  styleUrl: './agrinfo.component.css'
})
export class AgrinfoComponent {
  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
}

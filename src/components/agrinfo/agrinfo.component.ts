import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-agrinfo',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './agrinfo.component.html',
  styleUrl: './agrinfo.component.css'
})
export class AgrinfoComponent {

}

import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
}

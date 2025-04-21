import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-orchards',
  templateUrl: './orchards.component.html',
  styleUrls: ['./orchards.component.css'],
  imports: [NavbarComponent, FooterComponent],
  standalone: true
})
export class OrchardsComponent {

}

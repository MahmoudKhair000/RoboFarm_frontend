import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-usersign',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './usersign.component.html',
  styleUrl: './usersign.component.css'
})
export class UsersignComponent {

}

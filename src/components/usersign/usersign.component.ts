import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usersign',
  imports: [NavbarComponent,FooterComponent, CommonModule],
  templateUrl: './usersign.component.html',
  styleUrl: './usersign.component.css'
})
export class UsersignComponent {

}

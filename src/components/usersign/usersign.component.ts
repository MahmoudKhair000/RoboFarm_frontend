import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usersign',
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './usersign.component.html',
  styleUrl: './usersign.component.css'
})
export class UsersignComponent {
  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }

  signIn(form: NgForm) {
    if (form.valid) {
      console.log('Signed In!', form.value);
    } else {
      form.control.markAllAsTouched(); // Ensures validation messages show up
    }
  }
  signUp(form: NgForm) {
    if (form.valid) {
      console.log('Signed Up!', form.value);
    } else {
      form.control.markAllAsTouched(); // Ensures validation messages show up
    }
  }

  goSingUp() {
    document.getElementById("signIn")?.classList.add("d-none")
    document.getElementById("signUp")?.classList.remove("d-none")
  }
  goSingIn() {
    document.getElementById("signUp")?.classList.add("d-none")
    document.getElementById("signIn")?.classList.remove("d-none")
  }
}

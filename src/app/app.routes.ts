import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ServicesComponent } from '../components/services/services.component';

export const routes: Routes = [
    {
        title: "Home",
        path: "",
        component: HomeComponent,
    },
    {
        title: "Services",
        path: "services",
        component: ServicesComponent,
    },
/*
    {
        title: "About",
        path: "about",
        component: AboutComponent,
    },
    {
        title: "About",
        path: "about",
        component: AboutComponent,
    },
    {
        title: "About",
        path: "about",
        component: AboutComponent,
    },
*/
    {
        title: "About Us",
        path: "about",
        component: AboutComponent,
    },
    {
        title: "Contact Us",
        path: "contact",
        component: ContactComponent,
    }
];

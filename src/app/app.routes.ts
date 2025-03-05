import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';

export const routes: Routes = [
    {
        title: "Home",
        path: "",
        component: HomeComponent,
    },
    {
        title: "About",
        path: "about",
        component: AboutComponent,
    }
];

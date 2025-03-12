import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ServicesComponent } from '../components/services/services.component';
import { UsersignComponent } from '../components/usersign/usersign.component';
import { ConsultantsComponent } from '../components/consultants/consultants.component';
import { AgrinfoComponent } from '../components/agrinfo/agrinfo.component';

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
    {
      title: "Consultants",
      path: "consultants",
      component: ConsultantsComponent,
  },
  {
    title: "Agr-Info",
    path: "agrinfo",
    component: AgrinfoComponent,
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
    */
    {
        title: "Robofarm | User Sign",
        path: "sign",
        component: UsersignComponent,
    },
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

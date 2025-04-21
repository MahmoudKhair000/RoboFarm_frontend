import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './crops.component.html',
  styleUrl: './crops.component.css'
})
export class CropsComponent implements OnInit {
  crops = [
    {
      name: 'القمح',
      image: 'assets/images/wheat.jpg',
      type: 'محصول حبوب',
      varieties: ['قمح بلدي', 'قمح سكري', 'قمح شتوي'],
      cultivation: 'يزرع في الأراضي الطينية والرملية',
      plantingSeason: 'نوفمبر - ديسمبر',
      harvestSeason: 'أبريل - مايو',
      production: '8.5 مليون طن سنوياً'
    },
    {
      name: 'الذرة',
      image: 'assets/images/corn.jpg',
      type: 'محصول حبوب',
      varieties: ['ذرة بيضاء', 'ذرة صفراء', 'ذرة هجين'],
      cultivation: 'يزرع في الأراضي الخصبة',
      plantingSeason: 'مارس - أبريل',
      harvestSeason: 'يوليو - أغسطس',
      production: '6.2 مليون طن سنوياً'
    },
    {
      name: 'الأرز',
      image: 'assets/images/rice.jpg',
      type: 'محصول حبوب',
      varieties: ['أرز مصري', 'أرز جافا', 'أرز هندي'],
      cultivation: 'يزرع في الأراضي المروية',
      plantingSeason: 'مايو - يونيو',
      harvestSeason: 'سبتمبر - أكتوبر',
      production: '4.8 مليون طن سنوياً'
    },
    {
      name: 'القطن',
      image: 'assets/images/cotton.jpg',
      type: 'محصول ليفي',
      varieties: ['جيزة 86', 'جيزة 90', 'جيزة 94'],
      cultivation: 'يزرع في الأراضي الطينية',
      plantingSeason: 'مارس - أبريل',
      harvestSeason: 'أغسطس - سبتمبر',
      production: '300 ألف طن سنوياً'
    },
    {
      name: 'قصب السكر',
      image: 'assets/images/sugarcane.jpg',
      type: 'محصول سكري',
      varieties: ['فيتو', 'جيزة 6', 'جيزة 7'],
      cultivation: 'يزرع في الأراضي الطينية',
      plantingSeason: 'فبراير - مارس',
      harvestSeason: 'نوفمبر - ديسمبر',
      production: '16 مليون طن سنوياً'
    },
    {
      name: 'البقوليات',
      image: 'assets/images/legumes.jpg',
      type: 'محاصيل بقولية',
      varieties: ['فول بلدي', 'عدس', 'حمص'],
      cultivation: 'يزرع في الأراضي الطينية والرملية',
      plantingSeason: 'نوفمبر - ديسمبر',
      harvestSeason: 'مارس - أبريل',
      production: '500 ألف طن سنوياً'
    }
  ];

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
} 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits = [
    {
      name: 'التفاح',
      image: 'assets/images/apple.jpg',
      type: 'فاكهة تفاحية',
      varieties: ['ديلشس الأحمر', 'جراني سميث', 'فوجي', 'جالا'],
      cultivation: 'بساتين تقليدية وعصرية',
      harvestSeason: 'أواخر الصيف وأوائل الخريف',
      production: '500,000 طن سنوياً'
    },
    {
      name: 'البرتقال',
      image: 'assets/images/orange.jpg',
      type: 'فاكهة حمضية',
      varieties: ['نافيل', 'فالنسيا', 'برتقال الدم', 'كلمنتينا'],
      cultivation: 'بساتين الحمضيات',
      harvestSeason: 'الشتاء والربيع',
      production: '300,000 طن سنوياً'
    },
    {
      name: 'العنب',
      image: 'assets/images/grape.jpg',
      type: 'فاكهة عنبية',
      varieties: ['جلوب الأحمر', 'طومسون بذري', 'مسقط', 'كابيرنت'],
      cultivation: 'كرمات العنب',
      harvestSeason: 'أواخر الصيف وأوائل الخريف',
      production: '200,000 طن سنوياً'
    },
    {
      name: 'الكمثرى',
      image: 'assets/images/pear.jpg',
      type: 'فاكهة تفاحية',
      varieties: ['بارتلت', 'بوسك', 'أنجو', 'كمثرى آسيوي'],
      cultivation: 'بساتين تقليدية',
      harvestSeason: 'أواخر الصيف والخريف',
      production: '150,000 طن سنوياً'
    },
    {
      name: 'الخوخ',
      image: 'assets/images/peach.jpg',
      type: 'فاكهة ذات نواة',
      varieties: ['فريستون', 'كلاينجستون', 'خوخ أبيض', 'نكتارين'],
      cultivation: 'بساتين',
      harvestSeason: 'الصيف',
      production: '100,000 طن سنوياً'
    },
    {
      name: 'البرقوق',
      image: 'assets/images/plum.jpg',
      type: 'فاكهة ذات نواة',
      varieties: ['سانتا روزا', 'بلاك أمبر', 'ريد هارت', 'برقوق ياباني'],
      cultivation: 'بساتين',
      harvestSeason: 'الصيف',
      production: '80,000 طن سنوياً'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
} 
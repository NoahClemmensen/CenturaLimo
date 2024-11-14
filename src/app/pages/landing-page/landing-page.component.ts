import { Component } from '@angular/core';
import {NavigationComponent} from "@app/components/navigation/navigation.component";
import {ButtonComponent} from '@app/components/button/button.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {ServiceCardComponent} from '@app/components/service-card/service-card.component';
import {ImageCarouselComponent} from '@app/components/image-carousel/image-carousel.component';
import {CardComponent} from '@app/components/card/card.component';
import {TestimonyCarouselComponent} from '@app/components/testimony-carousel/testimony-carousel.component';
import {TestimonyCardComponent} from '@app/components/card/testimony-card/testimony-card.component';
import {ContactFormComponent} from '@app/components/contact-form/contact-form.component';
import {FooterComponent} from '@app/components/footer/footer.component';
import {SidebarComponent} from '@app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavigationComponent,
    ButtonComponent,
    NgOptimizedImage,
    ServiceCardComponent,
    ImageCarouselComponent,
    CardComponent,
    TestimonyCarouselComponent,
    TestimonyCardComponent,
    NgForOf,
    ContactFormComponent,
    FooterComponent,
    SidebarComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  scrollToElement($element:any ): void {
    const headerOffset = 79;
    const elementPosition = $element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({top: offsetPosition, behavior: 'smooth'});
  }

  protected images: { path: string, text?: string }[] = [
    { path: 'images/wheel.jpg', text: 'The centura is equipped with 3-piece wheels with gold bolts and a spinner badge.' },
    { path: 'images/cloth.jpg', text: 'The comfortable cloth inside, on the seats, to keep you warm and the wool seats clean' },
    { path: 'images/inside.jpg', text: 'The inside of the centura, with a center console and wool upholstery' },
    { path: 'images/gangsta.jpg', text: 'A customers experience with our services' },
    { path: 'images/gangstainside.jpg' },
    { path: 'images/gangstasmoke.jpg' },
    { path: 'images/opendoor.jpg' },
    { path: 'images/downlow.jpg', text: 'The centura from a low angle, showing the wheels and the side of the car' },
    { path: 'images/sideview.jpg' },
    { path: 'images/lowbehind.jpg' },
  ];

  protected testimonies: { name: string, text: string, title: string, rating: 1|2|3|4|5 }[] = [
    { name: 'John Doe', text: 'I had a great experience with the centura. It was a great ride and I would recommend it to anyone.', title: 'Great experience', rating: 5 },
    { name: 'Jane Doe', text: 'The centura was a great car to drive. It was comfortable and I felt safe in it.', title: 'Great car', rating: 4 },
    { name: 'John Smith', text: 'I had a great experience with the centura. It was a great ride and I would recommend it to anyone.', title: 'Great experience', rating: 5 },
    { name: 'Jane Smith', text: 'The centura was a great car to drive. It was comfortable and I felt safe in it.', title: 'Great car', rating: 4 },
  ];
}

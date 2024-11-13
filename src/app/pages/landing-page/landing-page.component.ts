import { Component } from '@angular/core';
import {NavigationComponent} from "@app/components/navigation/navigation.component";
import {ButtonComponent} from '@app/components/button/button.component';
import {NgOptimizedImage} from '@angular/common';
import {ServiceCardComponent} from '@app/components/service-card/service-card.component';
import {ImageCarouselComponent} from '@app/components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavigationComponent,
    ButtonComponent,
    NgOptimizedImage,
    ServiceCardComponent,
    ImageCarouselComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  scrollToElement($element:any ): void {
    const pos = $element.getBoundingClientRect().top;
    $element.scrollTo({top: pos - 64, block: "start", inline: "nearest"});
  }

  protected images: { path: string, text?: string }[] = [
    { path: '/images/wheel.jpg', text: 'The centura is equipped with 3-piece wheels with gold bolts and a spinner badge.' },
    { path: '/images/cloth.jpg', text: 'The comfortable cloth inside, on the seats, to keep you warm and the wool seats clean' },
    { path: '/images/inside.jpg', text: 'The inside of the centura, with a center console and wool upholstery' },
    { path: '/images/gangsta.jpg', text: 'A customers experience with our services' },
    { path: '/images/gangstainside.jpg' },
    { path: '/images/gangstasmoke.jpg' },
    { path: '/images/opendoor.jpg' },
    { path: '/images/downlow.jpg', text: 'The centura from a low angle, showing the wheels and the side of the car' },
    { path: '/images/sideview.jpg' },
    { path: '/images/lowbehind.jpg' },
  ];
}

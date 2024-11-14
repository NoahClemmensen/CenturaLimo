import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ButtonComponent} from '@app/components/button/button.component';

@Component({
  selector: 'app-testimony-carousel',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './testimony-carousel.component.html',
  styleUrl: './testimony-carousel.component.css'
})
export class TestimonyCarouselComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  onScrollUp() {
    if (this.cardContainer.nativeElement.scrollTop > 0) {
      this.cardContainer.nativeElement.scrollTo({
        top: this.cardContainer.nativeElement.scrollTop - 532,
        behavior: 'smooth'
      });
    }
  }

  onScrollDown() {
    if (this.cardContainer.nativeElement.scrollTop < this.cardContainer.nativeElement.scrollHeight) {
      this.cardContainer.nativeElement.scrollTo({
        top: this.cardContainer.nativeElement.scrollTop + 532,
        behavior: 'smooth'
      });
    }
  }
}

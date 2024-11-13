import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '@app/components/button/button.component';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    ButtonComponent,
    NgIf
  ],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  @Input({required: true}) images!: { path: string, text?: string }[];

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  scrollRight() {
    if (this.imgContainer.nativeElement.scrollLeft < this.imgContainer.nativeElement.scrollWidth) {
      this.imgContainer.nativeElement.scrollTo({
        left: this.imgContainer.nativeElement.scrollLeft + 732,
        behavior: 'smooth'
      });
    }
  }

  scrollLeft() {
    if (this.imgContainer.nativeElement.scrollLeft > 0) {
      this.imgContainer.nativeElement.scrollTo({
        left: this.imgContainer.nativeElement.scrollLeft - 732,
        behavior: 'smooth'
      });
    }
  }
}

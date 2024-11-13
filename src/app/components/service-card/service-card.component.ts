import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '@app/components/button/button.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    ButtonComponent
  ],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() image?: string;
}

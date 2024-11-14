import {Component, Input} from '@angular/core';
import {CardComponent} from '@app/components/card/card.component';

@Component({
  selector: 'app-testimony-card',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './testimony-card.component.html',
  styleUrl: './testimony-card.component.css'
})
export class TestimonyCardComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) text!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) rating!: 1|2|3|4|5;
}

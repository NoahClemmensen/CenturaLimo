import {booleanAttribute, Component, Input, TemplateRef} from '@angular/core';
import {NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() header?: TemplateRef<any>;
  @Input() footer?: TemplateRef<any>;
  @Input() body?: TemplateRef<any>;
  @Input({transform: booleanAttribute}) hideHeader: boolean = false;
  @Input({transform: booleanAttribute}) hideFooter: boolean = false;
}

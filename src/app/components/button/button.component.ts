import {booleanAttribute, Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {NgClass, NgIf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label?: TemplateRef<any>;
  @Input() icon?: TemplateRef<any>;
  @Input({transform: booleanAttribute}) filled: boolean = false;
  @Input({transform: booleanAttribute}) small: boolean = false;
  @Input() configuration: 'icon' | 'label' | 'icon-label' = 'icon-label';

  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}

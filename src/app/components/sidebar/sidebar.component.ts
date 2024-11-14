import {booleanAttribute, Component, Input} from '@angular/core';
import {ButtonComponent} from '@app/components/button/button.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input({transform: booleanAttribute}) open = false;

  public toggle() {
    this.open = !this.open;
  }
}

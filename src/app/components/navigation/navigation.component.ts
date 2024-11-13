import {Component, HostListener} from '@angular/core';
import {ButtonComponent} from '@app/components/button/button.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.isScrolled = window.scrollY > 0;
  }

  protected isScrolled: boolean = false;
}

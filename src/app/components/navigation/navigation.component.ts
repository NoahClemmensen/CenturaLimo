import {Component, HostListener, Output, ViewChild} from '@angular/core';
import {ButtonComponent} from '@app/components/button/button.component';
import {SidebarComponent} from '@app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    ButtonComponent,
    SidebarComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.isScrolled = window.scrollY > 0;
  }

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  onSidebarToggle() {
    this.sidebar.toggle();
  }

  protected isScrolled: boolean = false;
}

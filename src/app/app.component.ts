import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from '@app/components/button/button.component';
import {NavigationComponent} from '@app/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CenturaLimo';
}

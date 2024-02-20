import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, UserComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styles: ['']  // Puedes añadir estilos aquí si es necesario
})
export class AppComponent {
  city = 'santiago';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, UserComponent, NavbarComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  city = 'santiago';
}

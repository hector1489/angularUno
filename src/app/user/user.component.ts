import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'r3ptar';
  isLoggedIn = false;

  login(username: string, password: string): void {
    // Aquí podrías agregar lógica de autenticación con el nombre de usuario y la contraseña proporcionados
    console.log(`Intento de inicio de sesión para ${username} con contraseña ${password}`);
  }

}

import { Component, viewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from "./components/cursos/cursos.component";
import { NewCursoComponent } from './components/new-curso/new-curso.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from "./pages/inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursosComponent, NewCursoComponent, FormsModule, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

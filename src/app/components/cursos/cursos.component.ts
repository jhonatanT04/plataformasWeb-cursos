import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {  
  cursos: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }[] = localStorage.getItem('listaCursos') ? JSON.parse(localStorage.getItem('listaCursos')!) : [];
  eliminarCurso(curso: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }) {
    const index = this.cursos.indexOf(curso);
    if (index !== -1) {
      this.cursos.splice(index, 1);
      console.log(this.cursos)
      localStorage.setItem('listaCursos', JSON.stringify(this.cursos));
      
    }
  }
}



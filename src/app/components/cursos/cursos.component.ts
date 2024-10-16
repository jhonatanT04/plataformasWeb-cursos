import { Component, OnInit} from '@angular/core';
 import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{
  cursos: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }[] = [
    {
      nomCurso: "Introducción a la programación en Python",
      nomProfesor: "Ana Pérez",
      fechaInicio: new Date("2024-09-15"),
      fechaFinal: new Date("2024-10-30"),
      descripcion: "Curso básico para aprender los fundamentos de la programación con Python."
    },
    {
      nomCurso: "Desarrollo Web con Angular",
      nomProfesor: "Juan García",
      fechaInicio: new Date("2024-10-05"),
      fechaFinal: new Date("2024-11-15"),
      descripcion: "Curso intermedio para desarrollar aplicaciones web modernas con Angular."
    }
  ];

  ngOnInit(): void{
    this.cursos
  }
  eliminarCurso(curso: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }) {
    const index = this.cursos.indexOf(curso);
    if (index !== -1) {
      this.cursos.splice(index, 1)
    }
  }
  
  
}
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioCursosService } from '../../servicio-cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit  {  
  cursos: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }[] = localStorage.getItem('listaCursos') ? JSON.parse(localStorage.getItem('listaCursos')!) : [];
  eliminarCurso(curso: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }) {
    this.servicioCurso.eliminarCurso(curso)
  }
  constructor(private servicioCurso: ServicioCursosService) {}
  
  ngOnInit(): void{
    this.cursos=this.servicioCurso.cargarCursos();
  }
}



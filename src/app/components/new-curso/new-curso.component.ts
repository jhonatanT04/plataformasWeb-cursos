import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioCursosService } from '../../servicio-cursos.service';

@Component({
  selector: 'app-new-curso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-curso.component.html',
  styleUrl: './new-curso.component.css'
})
export class NewCursoComponent {

  nomCurso: string = '';
  nomProfesor: string = '';
  fechaInicio: Date = new Date();
  fechaFinal: Date = new Date();
  descripcion: string = '';

  constructor(private servicioCurso: ServicioCursosService) { }
  saveCursos(nomCurso: string, nomProfesor: string, fechaInicio: Date, fechaFinal: Date, descripcion: string) {
    const duracion = 1;

    if (this.validacionDatos()) {
      this.servicioCurso.nuevoCurso(nomCurso, nomProfesor, fechaInicio, fechaFinal, descripcion, duracion);
      this.limpiarCampos();
    }

  }
  calcularDuracionCurso(fechaInicio: Date, fechaFinal: Date): number {
    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinalDate = new Date(fechaFinal);

    if (isNaN(fechaInicioDate.getTime()) || isNaN(fechaFinalDate.getTime())) {
      
      return 0;
    }

    const unDia = 1000 * 60 * 60 * 24;
    const diferenciaMilisegundos = fechaFinalDate.getTime() - fechaInicioDate.getTime();
    return Math.round(diferenciaMilisegundos / unDia);
  }

  validacionDatos(): boolean {
    if (this.nomCurso.trim() === '' && this.nomProfesor.trim() === '' && this.descripcion.trim() === '') {
      alert('Ingrese los datos correctamente')
      return false;
    } else if (this.fechaInicio >= this.fechaFinal) {
      alert('Ingrese las fechas correctamente')
      return false;
    }
    return true;
  }

  limpiarCampos() {
    this.nomCurso = '';
    this.nomProfesor = '';
    this.fechaInicio = new Date();
    this.fechaFinal = new Date();
    this.descripcion = '';
  }

  /*most() {
    let mensaje = document.createElement('div');
    mensaje.classList.add('mensaje-desaparecer'); // Agregar la clase
    mensaje.textContent = "Este es el mensaje";
    mensaje.style.position = 'fixed';
    mensaje.style.top = '50%';
    mensaje.style.left = '50%';
    mensaje.style.transform = 'translate(-50%, -50%)';
    mensaje.style.backgroundColor = 'white';
    mensaje.style.padding = '10px';
    mensaje.style.border = '1px solid black';
    mensaje.style.zIndex = '1'
    
    document.body.appendChild(mensaje);
    
    setTimeout(() => {
      mensaje.style.opacity = '0';
      setTimeout(() => {
        mensaje.remove();
      }, 500);
    }, 3000);
  }*/

}

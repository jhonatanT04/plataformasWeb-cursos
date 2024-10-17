import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
  listaCursos: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string }[] = []

  constructor() {
    this.listaCursos = JSON.parse(localStorage.getItem('listaCursos') || '[]');
  }
  saveCursosLocalStorage(nomCurso: string, nomProfesor: string, fechaInicio: Date, fechaFinal: Date, descripcion: string) {
    let curso = { nomCurso: nomCurso, nomProfesor: nomProfesor, fechaInicio: fechaInicio, fechaFinal: fechaFinal, descripcion: descripcion }
    this.listaCursos.push(curso)
    localStorage.setItem('listaCursos', JSON.stringify(this.listaCursos));
    
    this.limpiarCampos();
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
    // Agregar el elemento al body
    document.body.appendChild(mensaje);
    // Ocultar el elemento después de un tiempo
    setTimeout(() => {
      mensaje.style.opacity = '0';
      setTimeout(() => {
        mensaje.remove();
      }, 500);
    }, 3000);
  }*/

}

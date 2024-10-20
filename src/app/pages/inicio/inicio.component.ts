import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../service/ubicacion.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  geoLocationData: any;
  constructor(private ubicacionClien:UbicacionService) { }

  ngOnInit(): void {
    // Llama al servicio para obtener la geolocalización
    this.ubicacionClien.getIpInfo('check')  
      .subscribe(data => {
        this.geoLocationData = data;
        console.log(this.geoLocationData);  
      }, error => {
        console.error('Error al obtener la geolocalización:', error);
      });
  }

}

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ServicioCursosService } from './servicio-cursos.service';
import { UbicacionService } from './service/ubicacion.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),ServicioCursosService,UbicacionService,importProvidersFrom(HttpClientModule)]
}; 

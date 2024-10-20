import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { ServicioCursosService } from './servicio-cursos.service';
import { UbicacionService } from './service/ubicacion.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withViewTransitions()),
    ServicioCursosService,
    UbicacionService,
    importProvidersFrom(HttpClientModule)]
}; 

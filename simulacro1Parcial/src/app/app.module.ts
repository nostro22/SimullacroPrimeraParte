import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BajaPeliculaComponent } from './componentes/baja-pelicula/baja-pelicula.component';
import { EdicionPeliculaComponent } from './componentes/edicion-pelicula/edicion-pelicula.component';

import { FormBuilder, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TablaPeliculaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    BusquedaComponent,
    ErrorComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    HeaderComponent,
    BienvenidoComponent,
    DetallePeliculaComponent,
    BajaPeliculaComponent,
    EdicionPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

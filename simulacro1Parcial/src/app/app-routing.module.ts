import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

const routes: Routes = [
  {path:"", title:"Bienvenido", component: BienvenidoComponent},
  {path:"bienvenida", redirectTo:""},
  {path:"búsqueda", title:"Busqueda", component: BusquedaComponent},
  {path:"peliculas/alta", title:"Pelicula Alta", component: PeliculaAltaComponent},
  {path:"actor/alta", title:"Actor Alta", component: ActorAltaComponent},
  {path: 'actor/listado', title:"Actor Listado", component:ActorListadoComponent },
  {path: 'peliculas/listado', title:"Pelicula Listado", component:PeliculaListadoComponent },
  {path:"error", title:"ERROR", component: ErrorComponent},
  {path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


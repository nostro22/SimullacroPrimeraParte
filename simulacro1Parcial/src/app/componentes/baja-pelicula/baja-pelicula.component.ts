import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

@Component({
  selector: 'app-baja-pelicula',
  templateUrl: './baja-pelicula.component.html',
  styleUrls: ['./baja-pelicula.component.css']
})
export class BajaPeliculaComponent {
  @Input() detalleRecibido?:any;
  constructor(private firestore: Firestore) {}

  borrarPelicula(){
    const docRef = doc(this.firestore,'peliculas/',this.detalleRecibido.id);
    deleteDoc(docRef);
  }

  
}

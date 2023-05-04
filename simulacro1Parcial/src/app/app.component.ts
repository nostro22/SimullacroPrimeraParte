import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { doc, deleteDoc ,updateDoc  } from "firebase/firestore";


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;
   peliculas$: Observable<any[]>;

  constructor(private toastr: ToastrService) {
    const aCollection = collection(this.firestore, 'items')
    const bCollection = collection(this.firestore, 'peliculas')
    this.items$ = collectionData(aCollection);
    this.peliculas$ = collectionData(bCollection);
  }



  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  
  
  

}
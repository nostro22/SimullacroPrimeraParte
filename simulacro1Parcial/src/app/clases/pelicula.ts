import { Timestamp } from "firebase/firestore";

export class Pelicula {
    id:number;
    nombre:string;
    tipo:Array<string>;
    fechaDeEstreno : Date;
    cantidadDePublico : number;
    fotoPelicula : string;
   
    constructor( id:number, nombre:string, tipo:Array<string>, fechaEstreno : Timestamp, cantidadDePublico:number, foto : string)
    {
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaDeEstreno = fechaEstreno.toDate();
        this.cantidadDePublico = cantidadDePublico;
        this.fotoPelicula = foto;
    }
}

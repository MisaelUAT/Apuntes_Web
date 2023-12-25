class Mascotas{

    constructor(Nombre,Edad,Adopcion){
        this.Nombre= Nombre;
        this.Edad=Edad;
        this.Adopcion= Adopcion;

    }

    static cambiarValores(){

        this.Nombre= "Carlos";
        this.Edad= 4 ;
        this.Adopcion= false;
        mostrarInformacion()
    }


    mostrarInformacion(){

        console.log(`El nombre es: ${this.Nombre} y
        tiene: ${this.Edad} de edad y su adopcion es
        ${this.Adopcion}`);
    }
}
let perro = new Mascotas("Jacob",5,true);
Mascotas.cambiarValores()



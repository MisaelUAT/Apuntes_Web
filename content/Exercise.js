class Mascotas{

    constructor(Nombre,Edad,Adopcion){
        this.Nombre= Nombre;
        this.Edad=Edad;
        this.Adopcion= Adopcion;

    }

    static cambiarValores(Nombre_Mostrar,Edad_Mostrar,Adopcion_Mostrar){
        console.log(`El nombre es: ${Nombre_Mostrar} y
        tiene: ${Edad_Mostrar} de edad y su adopcion es
        ${Adopcion_Mostrar}`);
    }


    mostrarInformacion(nombre,edad,adopcion){
        this.Nombre= nombre;
        this.Edad= edad;
        this.Adopcion= adopcion;
        Mascotas.cambiarValores(nombre,edad,adopcion)
       
    }
}
let perro = new Mascotas("Jacob",5,true);
perro.mostrarInformacion()



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
        nombre= this.Nombre;
        edad= this.Edad;
        adopcion= this.Adopcion;
        Mascotas.cambiarValores(nombre,edad,adopcion)
       
    }
}

let perro= new Mascotas("Misael",5,true)
perro.mostrarInformacion()





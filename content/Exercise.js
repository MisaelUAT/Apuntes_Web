class Mascotas{

    constructor(Nombre,Edad,Adopcion){
        this.Nombre= Nombre;
        this.Edad=Edad;
        this.Adopcion= Adopcion;

    }

    set configAdopcion(adopcion_cambiar){
    adopcion_cambiar= this.Adopcion;
    adopcion_cambiar= false;
    this.Adopcion= adopcion_cambiar;
    }

    get mostrarAdopcion()
    {
        let mensaje= "La Adopcion es " + this.Adopcion
        return mensaje
    }
    
}

let perro= new Mascotas("Bruno",5);
perro.configAdopcion= true;
console.log(perro.mostrarAdopcion)






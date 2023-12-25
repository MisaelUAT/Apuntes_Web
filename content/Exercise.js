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

class Mascotas_Minis extends Mascotas{

    constructor(Nombre,Edad,Adopcion,Altura){
        super(Nombre,Edad,Adopcion);
        this.Altura= Altura;
    }
}
let chihuahua= new Mascotas_Minis("Mini_Bruno",3,false,1.84)
chihuahua.configAdopcion= true
console.log(chihuahua.mostrarAdopcion)




# Programacion Orientada a objetos (POO)

## Antes de Empezar
Este paradigma se usa para facilitar la programacion y hacer mas eifcientes nuestros programas a la hora de crearlos mediante objetos.Los  **objetos** son entidades que tienen **atributos** y **metodos**. Los atributos son las caracteristicas de los objetos y los metodos son las acciones que pueden realizar los objetos.

## Algunas Caracteristicas de POO
- **Abstraccion**: Es el proceso de identificar las caracteristicas esenciales de un objeto y eliminar las caracteristicas no esenciales.
- **Encapsulamiento**: Es la caracteristica que permite ocultar los detalles de implementacion de un objeto.
- **Modularidad**: Es la caracteristica que permite dividir un programa en modulos que pueden ser compilados por separado.
- **Jerarquia**: Es la caracteristica que permite que los objetos se clasifiquen en grupos jerarquicos.
- **Polimorfismo**: Es la caracteristica que permite que los objetos de distintas clases respondan a un mismo mensaje.

## Clases 
Las clases son los moldes que se usan para crear los objetos. Las clases son como los planos de una casa, en donde se especifican las caracteristicas que tendra la casa y las acciones que podra realizar. Los objetos son las casas que se construyen a partir de los planos. En Javascript se realizan asi:
```js
class nombreClase {
    //Atributos
    //Metodos
}
```

Ejemplo:

![Ejemplo](/Assets/img/clase.png)

## Constructores
Son aquellos que podemos usar para asignarle las caracteristicas de nuestro objeto a crear. En Javascript se realizan asi:

```js
class nombreClase {
    constructor(Atributos) {
        //Inicializacion de Atributos
    }
}
```

Ejemplo:

![Ejemplo](/Assets/img/constructor.png)


## Inicializacion de Atributos
Para inicializar los atributos de un objeto se usa la palabra reservada **this**. En Javascript se realizan asi:

```js
class nombreClase {
    constructor(Atributo1, Atributo2, Atributo3) {
        this.Atributo1 = Atributo1;
        this.Atributo2 = Atributo2;
        this.Atributo3 = Atributo3;
    }
}
```

Ejemplo:

![Ejemplo](/Assets/img/atributos.png)

## Instancias
Son los objetos que nosotros creamos a base las clases que ya hemos realizados anteriormente. En Javascript se realizan asi:

```js
let nombreObjeto = new nombreClase(Atributo1, Atributo2, Atributo3);
```

![Ejemplo](/Assets/img/instancia.png)

> Siempre qque vayas a crear nuevas instancias, trabaja con const para evitar que se sobreescriban los valores.

## Metodos
Son las acciones que puede realizar un objeto. En Javascript se realizan asi:

```js
class nombreClase {
    constructor(Atributo1, Atributo2, Atributo3) {
        this.Atributo1 = Atributo1;
        this.Atributo2 = Atributo2;
        this.Atributo3 = Atributo3;
    }
    nombreMetodo() {
        //Codigo del metodo
    }
}
```

Ejemplo:

![Ejemplo](/Assets/img/metodos.png)

> Los Metodos son funciones que se encuentran dentro de una clase. Por lo tanto, se pueden usar los parametros y las variables locales. Para invocar a estos Metodos se usa la siguiente sintaxis: 

```js
nombreObjeto.nombreMetodo();
```

Ejewmplo:

![Ejemplo](/Assets/img/invocacion.png)

## Metodos Static
Son aquellos que se pueden usar sin necesidad de crear una instancia. En Javascript se realizan asi:

```js
class nombreClase {
    constructor(Atributo1, Atributo2, Atributo3) {
        this.Atributo1 = Atributo1;
        this.Atributo2 = Atributo2;
        this.Atributo3 = Atributo3;
    }
    static nombreMetodo() {
        //Codigo del metodo
    }
}
```
> Ellos no dependen de los atributos de la clase para funcionar pero deben de estar dentro de ella.

Ejemplo:

![Ejemplo](/Assets/img/static.png)

Las formas en que se invoquen son las siguientes:
```js
nombreClase.nombreMetodo(Parametros);
```

Ejemplo:

![Ejemplo](/Assets/img/invocar-static.png)

> Tambien puedes invocar metodos static  en metodos comunes.

Ejemplo:

![Ejemplo](/Assets/img/metodos_conjunto.png)

## Getters y Setters
Son aquellos que nos permiten acceder a los atributos de un objeto y modificarlos. En Javascript se realizan asi:

```js
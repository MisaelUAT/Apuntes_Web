# Estructuras Secuenciales
Son aquellas acciones que nos van a permitir realizar ciertas acciones cuando se cumple algo, puede ser parecido a los operadores logicos pero en este caso se van a ejecutar de manera secuencial, es decir, una tras otra.
En Javascript existen 2:
- **La Estructura If**
- **La Estructura Switch**

## La Estructura If

Esta estructura nos va a permitir ejecutar ciertas acciones cuando se cumpla una o mas condiciones. Su sintaxis es la siguiente:

Su estructura se compone de la siguiente manera: 
```js
// Siempre va a ir la palabra clave if
// Tambien la condicion siempre se pondra en Parentesis
if(condicion){
    //Aqui van las acciones que se van a ejecutar si se cumple la condicion
}
```

**Ejemplo de su uso:**
```js
// Variable a Usar
var num_1= 10;
// Condicion
if(numero == 10){
    console.log("El numero es igual a 10");
}
```
![Ejemplo de If](/Assets/img/if1.png)
> Recuerda siempre ser especifico a la hora de querer realizar una accion, ya que si no se cumple la condicion, no se ejecutara nada.

2. Tambien existen los **else if** que son condiciones adicionales en caso que no se cumpla la condicion anterior, su sintaxis es la siguiente:
```js
// Siempre va a ir la palabra clave else if
// Tambien la condicion siempre se pondra en Parentesis
else if(condicion){
    //Aqui van las acciones que se van a ejecutar si se cumple la condicion
}
```

**Ejemplo de su uso:**
```js
// Variable a Usar
var num_1= 10;
// Condicion 1
if( num_1 != 10){

    console.log("El numero es diferente a 10");
}
//Condicion 2
else if(num_1 == 10){

    console.log("El numero es igual a 10");
}
```
![Ejemplo de If](/Assets/img/if2.png)

> Recuerda que los else if siempre van a ir en la parte inferior de la condicion anterior

3. Tambien existe el **else** que es una condicion que se ejecuta cuando no se cumple ninguna de las condiciones anteriores, su sintaxis es la siguiente:
```js
// Siempre va a ir la palabra clave else
else{
    //Aqui van las acciones que se van a ejecutar si se cumple la condicion
}
```

**Ejemplo de su uso:**
```js
// Variable a Usar
var num_1= 10;
// Condicion 1
if(num_1 < 9){

    console.log("El numero es menor a 9");
}
//Condicion 2
else if(num_1 > 11){

    console.log("El numero es mayor a 9");
}
// Condicion default
else{

    console.log("El numero es igual a 9");
}
```

> Cuando es Else no se le pone ninguna condicion ya que es cuando no se cumple ninguna de las anteriores

## La Estructura Switch
Esta consiste en una estructura que nos va a permitir ejecutar ciertas acciones cuando se cumpla una o mas condiciones. Lo que se diferencia con el if es que en este caso se va a evaluar una variable y dependiendo del valor de esta se va a ejecutar una accion u otra. Su sintaxis es la siguiente:
```js
// Siempre va a ir la palabra clave switch
// Siempre poner una variable para evaluar en parentesis.
switch(variable){
    case valor1:
        //Aqui van las acciones que se van a ejecutar si se cumple la condicion
    break;

    default:
        //Aqui van las acciones que se van a ejecutar si no se cumple ninguna de las condiciones anteriores
    break;
}
```

Ejemplo de su uso: 
```js
var num_1= 10;
switch(num_1){

    case 20:
        console.log("El numero es igual a 20");
    break;
        case 10:
        console.log("El numero es igual a 10");
        break;
            default:
                console.log("El numero es diferente a 10 y 20");
            break;
}
```
![Ejemplo de Switch](/Assets/img/switch.png)

> Switch no evalua condiciones, solo variables.

## Notas
Si quieres sabes mas sobre el uso del if y el switch, puedes ir a la seccion de [Ejemplos](/Lections/Extra.md) y ver los ejemplos de cada uno de ellos.
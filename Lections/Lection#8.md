# Principios Basicos de Arreglos
Cuando nosotros tenemos muchos variables se nos vuelve el codigo mas extenso y hay veces que eso nos perjudica a la hora de tener codigo extenso. Por eso existen los arreglos o arrays, que son una coleccion de datos que se encuentran en una sola variable. En Javascript existen diferentes tipos:

-Arreglo de variable
-Arreglo descriptivo

## Arreglo de variable
Es un arreglo que contiene una coleccion de datos que pueden ser de cualquier tipo, por ejemplo:

Estructura de un Array:
- Declarar una variable con el nombre del arreglo
- Abrir corchetes
- Dentro de los corchetes se colocan los datos separados por comas

```js
//Numeros
var numeros=[1,2,3,4,5,6,7,8,9,10];
//Cadenas de texto
var cadenas=["Hola","Mundo","!"];
//Booleanos
var booleanos=[true,false,true,false];
```
> Tambien puedes meter mas diferentes tipos de datos pero en este caso solo explicaremos algunos.

![Arreglo de variable](/Assets/img/arrays.png)

## Arreglo Asociativo o Objeto
Es un arreglo que contiene una coleccion de datos que pueden ser de cualquier tipo, pero en este caso se le asigna un nombre a cada dato, por ejemplo:
```js
var persona={
    nombre:"Juan",
    apellido:"Perez",
    edad:25,
    peso:75,
    altura:1.75
}
```

**Ejemplo de su uso:**


![Arreglo descriptivo](/Assets/img/arrays2.png)

> En teoria estos no son como los arrays regulares, son mas bien conocidos como objetos pero en este seccion no la llevaremos a profundidad.

# Metodos Comunes en un Array Regular
## .length
Este metodo nos permite saber la cantidad de elementos que tiene un arreglo, por ejemplo:

```js
var numeros=[1,2,3,4,5,6,7,8,9,10];
console.log(numeros.length); // 10
```
> Este metodo nos favorece mucho a la hora de recorrer arrays con el bucle for. Luego veremos como se realiza

## .push()
Este metodo nos permite agregar un elemento al final del arreglo, por ejemplo:

```js
var numeros=[1,2,3,4,5,6,7,8,9,10];
numeros.push(11);
console.log(numeros); // [1,2,3,4,5,6,7,8,9,10,11]
```

## .pop()
Este metodo nos permite eliminar el ultimo elemento del arreglo, por ejemplo:

```js
var numeros=[1,2,3,4,5,6,7,8,9,10];
numeros.pop();
console.log(numeros); // [1,2,3,4,5,6,7,8,9]
```

## .reduce()
Este metodo nos permite reducir los elementos de un arreglo a un solo valor, por ejemplo:
- Se necesita una funcion
- Declara dos valores: **Valor actual y valor anterior**
- Se retorna la operacion que se desea realizar

```js
var numeros=[1,2,3,4,5,6,7,8,9,10];
var suma=numeros.reduce(function(valorAnterior,valorActual){
    return valorAnterior+valorActual;
});
console.log(suma); // 55
```
> Este nos ayuda cuando tenemos que hacer Operaciones Matematicas con los elementos de un arreglo

## Conclusiones
Si Necesitas saber algo mas sobre los arreglos te recomiendo ir al apartado de 
[Notas](//Lections/Extra.md).




# Principios de Javascript

Javascript es un lenguaje de programación que se utiliza para crear páginas web interactivas. Una página web no es más que un documento que se muestra en un navegador web. Este documento puede ser escrito en HTML, CSS y Javascript. Al mismo tiempo este lenguaje tiene diversos usos en el area de la programacion como:

* Desarrollo de Aplicaciones Web
* Desarrollo de Aplicaciones Móviles
* Desarrolllo de IA
* Desarrollo de Videojuegos

> En esta guia no nos enfocaremos a dar tantos tecnisismos y nos enfocaremos mas en lo que es la sintaxis.

## Sintaxis Basica de Javacript

### Variables
Cuando nosotros nos referimos variables para nosotros como programadores son aquellos espacios de almacenamiento para los datos. En pocas palabras podemos usar las variables para almacenar un dato temporal ya sea: texto,numero, booleano,etc. Para declarar una variable es necesario hacer lo siguiente:

```js
// Estructura de una variable
var nombreVariable = 'Valor de la Variable';
```
> **Ojo:** En Javascript no es necesario especificar el tipo de dato como en otros lenguajes

**Ejemplos de uso de las variables puede ser:**
* Almacenar una edad
* Almacenar el nombre de una persona
* Almacenar la dirrecion de una empresa
* Almacenar una fecha de cumpleaños
* Almacenar numeros para sumarlos

### Como se verian las variables en codigo

![Variables y sus usos](/Assets/img/variables1.png)

> Como viste en el ejemplo en codigo existen diferentes tipos de datos y en este manual veremos algunos de los mas comunes y sencillos de aprender al principio

## Tipos de Datos

Recuerda que un dato es un fragmento de informacion con el que podemos manipular y realizar una ciertas acciones con el. A continuacion te mostrare algunos de ellos:

### String
Son aquellos datos que son conocidos como cadena de caracteres o texto, Aqui podemos **almacenar cualquier tipo de texto** que nosotros queramos. Existen diferentes formas de escribirlos:

```js
var nombre= "Misael";
var nombre2= 'Misael';
```

![String](/Assets/img/variables2.png)

### Number

En estos datos solo podemos almacenar lo que nosotros consideremos como **valores numericos** :

+ Enteros
+ Decimales
+ Negativos
+ Positivos

**Se verian asi:**

```js
var num_1= 10;
var num_2= 10.5;
var num_3= -10;
var num_4= -10.5;
```
### Objeto
Este tipo de datos se usa para almacenar un **conjunto de datos** que nosotros consideremos como un objeto. Por ejemplo:

```js
//Nombre del Objeto
var Misael={
//Caracteristicas del Objeto 
Nombre: "Misael",
Edad: 18,
Genero: 'Masculino'
};
```
> **Ojo:** En este tipo de datos es necesario usar los dos puntos para separar el nombre de la caracteristica y la coma para separar las caracteristicas

![Objeto](/Assets/img/variables4.png)

### Date
Este tipo de datos se usa para **almacenar una fecha**. Por ejemplo:

```js
var dia_nacimiento= new Date(2004,09,30)
```
> Siempre se tiene que poner la palabra new y date para poder almacenar una fecha y separar los datos que estan dentro de la fecha con comas.

![Date](/Assets/img/variables5.png)


### Booleanos
Este tipo de datos se usa para almacenar un valor de **verdadero o falso**. Por ejemplo:

```js
var condicion = true; 
var condicion= false;
```
> **Ojo:** En este tipo de datos es necesario usar la palabra true o false para poder almacenar un valor booleano

![Booleanos](/Assets/img/variables6.png)

## Indefinidas
Este tipo de datos son aquellos en las que la variable esta declarada pero no asignada a **ningun valor**. Por ejemplo:

```js
var numero;
var nombre;
```

![Indefinidas](/Assets/img/variables7.png)


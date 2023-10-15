# Operaciones Logicas
En este apartado veremos de que tratan las operaciones logicas y como se pueden usar a beneficio de nosotros.

### ¿Que son los Operadores Logicos?
Los operadores logicos son aquellos que nos permiten comparar dos valores y obtener un resultado de **_Verdadero_** o **_Falso_**. Pero para usarlos necesitamos especificar que es una **_Condicion_**.
> Los Operadores Logicos van a determinar si una condicion que nosotros vayamos a especificar se cumpla o no.

### Operador Logico AND
Este operador se utiliza para determinar si dos condiciones se cumplen al mismo tiempo. Para usarlo se necesita el simbolo de **_&&_** y se utiliza de la siguiente manera:
```js
// Variables que usaremos para las condiciones
var num_1= 40;
var num_2= 20;
// Especificamos las condiciones
// Solo va a ser Verdadero si 40 es mayor a 20 y 40 es menor a 20
var resultado= num_1 > num_2 && num_1 < num_2;
```
> En este caso ya que la primera condicion se cumple pero la segunda no, el resultado sera **_Falso_**.

![Operador Logico AND](/Assets/img/AND.png)
> EL resultado en esta ocasion sera **true** ya que ambas condiciones se cumplen. num_1 es igual a 10 y num_2 es mayor a 10.

### Operador Logico OR
Este operador se utiliza para determinar si al menos una de las condiciones se cumple. Para usarlo se necesita el simbolo de **_||_** y se utiliza de la siguiente manera:
```js
var num_1= 40;
var num_2= 20;
var resultado= num_1 > num_2 || num_1 < num_2;
```
> Aqui en esta ocasion el resultado sera **_Verdadero_** ya que la primera condicion se cumple. En este operador no es necesario que una una segunda condicion se cumpla.

![Operador Logico OR](/Assets/img/OR.png)

> Aqui la condicion es **Falsa** ya que la variable **_nombre_carlos_** no tiene almacenado el valor **"Roberto"** y la variable  **_nombre_roberto_** no tiene almacenado el valor **"Carlos"**.7

### Operador Logico NOT
Este oPerador funciona para cambiar el valor de la condicion a su opuesto. Para usarlo se necesita el simbolo de **_!_** y se utiliza de la siguiente manera:
```js
// Variables a utilizar
var num_1= 40;
var num_2= 20;
// Variable a evaluar
var resultado = num_1 + num_2; // resultado= 60. Su valor es True
// Usamos el operador NOT
var condicion_invertida= !(resultado == 60); // EL resultado es Falso ya que no es igual a 60
```
>Aqui se invirtio el valor de la condicion de **true a false**. Recuerda siempre poner la condicion despues del simbolo de **_!_** ya sea en parentesis.

![Operador Logico NOT](/Assets/img/NOT.png)

> El resultado va a ser verdadero ya que se invirtio el valor de la condicion de **false a true**.

## Notas
- Los Operadores Logicos puedes saber mas sobre como se manejan cuando hay dos condiciones en el apartado de 
[Operadores Logicos](/Lections/Extra.md).

- Tambien encontraras informacion sobre las tablas de la verdad de los 3 Operadores que vimos :3
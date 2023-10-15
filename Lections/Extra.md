# Scripts Especiales

**1.1 typeof:** Sirve para saber el tipo de dato que almacena una cierta variable.
    
 ```js
 var edad= 18;
 // Poner simepre la palabra clave typeof seguido de la variable
 console.log(typeof edad);
```

**1.2 Incremento y Decremento:** Sirven para aumentar o disminuir en 1 el valor de una variable.
* **_Incremento_**: Se utilizar dos vecez el signo de **+**.

* **_Decremento:_** Se utiliza dos veces el signo de **-**.
```js
var num_1= 10;
// Incremento
num_1++; // num_1= 11
// Decremento
num_1--; //num_1= 10;
```
**1.2 Operador de Asignacion:** Son operadores que nos permiten asignar un valor a una variable. Estos operadores son los siguientes. Es el tipo signo de "=". Ejemplo:
```js
// Aqui estamos asignando el valor de 10 a la variable num_1
var num_1= 10;
```

**1.2 Operador de Igualdad:** Es el signo de **_==_**. Este operador nos sirve para comparar dos valores y saber si son iguales. Ejemplo:
```js
//Variable a utilizar 
var num_1= 10;
// Aqui estamos comparando si el valor de la variable num_1 es igual a 10
var resultado= num1 == 10;
```

**1.2 Operadores de Mayor y Menor que:** Son los signos de **_>_** y **_<_**. Estos operadores nos sirven para comparar dos valores y saber si uno es mayor o menor que el otro. Ejemplo:
```js
var num_1 = 10;
var num_2= 15;
// Aqui se compara si el numero 10 es mayor que el numero 15
var resultado= num_1 > num_2; // False
// Aqui se compara si el numero 10 es menor que el numero 15
var resultado= num_1 < num_2; // True
```


**1.2 Jerarquia de Operaciones:** Es el orden en el que se van a realizar las operaciones. En javascript se realiza de la siguiente manera:

![Jerarquia](/Assets/img/jerarquia_operaciones.jpg)

## Conceptos Especiales

**1.2 Compilador:** Es un programa que traduce el codigo de un lenguaje de programacion a otro lenguaje que entiendan las maquinas.

**1.4 Condicion:** Es una expresion en la que determinaremos si puede cumplirse o no. Esto en programacion nos sirve mucho para realizar ciertas teareas del programa que hagamos y trabajar solo con los datos que necesitemos.

**1.4 Tablas de la verdad:** Son tablas que nos muestran los resultados de los operadores logicos. En estas tablas se muestran todas las posibles combinaciones de los valores de las variables que se esten evaluando:

**AND:** Operador logico que se utiliza para determinar si dos condiciones se cumplen al mismo tiempo. Su tabla de la verdad es el siguiente:

| A     | B     | A AND B |
|-------|-------|---------|
| true  | true  | true    |
| true  | false | false   |
| false | true  | false   |
| false | false | false   |

**OR:** Operador logico que se utiliza para determinar si al menos una de las condiciones se cumple. Su tabla de la verdad es el siguiente:

| A     | B     | A OR B |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

**NOT:** Operador logico que se utiliza para cambiar el valor de la condicion a su opuesto. Su tabla de la verdad es el siguiente:

| A     | NOT A |
|-------|-------|
| true  | false |
| false | true  |

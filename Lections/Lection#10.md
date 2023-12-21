# Funciones

En todo lenguaje de programacion existen las funciones, estas son un conjunto de instrucciones que se ejecutan cuando son llamadas, estas funciones pueden recibir parametros y retornar valores.

## Importancia de las funciones
- Ayudan a reducir el codigo repetido
- Ayudan a dividir el codigo en partes mas pequeñas
- Ayudan a organizar el codigo
- Ayudan a hacer el codigo mas legible

## Estructura de una funcion
La funcion se compone de 4 partes:
- Nombre de la funcion
- Parametros de entrada
- Cuerpo de la funcion
- Valor de retorno

```js
//Ejemplo de una funcion en Javascript
function nombreFuncion(parametros) {
    // Cuerpo de la funcion
    return valorRetorno;
}
```

> Las funciones pueden ser declaradas de dos formas, la primera es la que se muestra en el ejemplo anterior, la segunda es asignando una funcion anonima a una variable.

```js
//Ejemplo de una funcion anonima
const nombreFuncion = function(parametros) {
    // Cuerpo de la funcion
    return valorRetorno;
}
```
> No necesariamente se tiene que pedir en todos los casos parametros de entrada, ni retornar un valor.

```js
//Ejemplo de una funcion sin parametros de entrada y sin valor de retorno  
function nombreFuncion() {
    // Cuerpo de la funcion
}
```
> Tambien la funcion puede usarse de esta manera pero va dependiendo de la situacion en la que se encuentre el programador.

**A continuacion se mostraran ejemplos de las diferentes formas de declarar una funcion:**

## Ejemplos de los Usos de las funciones

* **Situacion 1:** Calcular la suma de dos numeros y mostrar el resultado en consola.

**Codigo:**

![Suma](/Assets/img/sumaDosnumeros.png)
> Como Resultado que nos devolvera la funcion **Suma** se Obtiene 30

* **Situacion 2:** Calcular el area de un triangulo y mostrar el resultado en consola.

**Codigo:**

![Triangulo](/Assets/img/areaTriangulo.png)

> Como resultado nos dara a 17.5

Como nos dimos cuenta en ambos ejemplos las variables que declaremos dentro de la funcion solo se pueden usar dentro de la funcion, **si intentamos usarlas fuera de la funcion nos dara un error.** Por eso es importante el tener que declarar variables globales y variables locales dependiendo se las requiramos o no.

* **Situacion 3:** Calcular el Residuo de una division y mostrar el resultado en consola.

![Residuo](/Assets/img/residuoDosNumeros.png)

> Como vez aqui no tuvimos que pedir valores de entrada y tampoco retornar ningun valor, solo mostramos el resultado en consola. Ya que solo esta cumpliendo una funcion especifica del programa. Y el valor que nos devolvera sera 1
 # Recorrido de un Array de Variable
Ahora que vimos el como usar los arrays y sus metodos, Ahora veremos la forma en como podemos hacer recorridos entre sus elementos, Por medio de los ciclos que vimos anteriormente:

## Do while y While
Para realizar con estos bucles necesitas tener una variable contadora para mostrar y tambien especificar las condiciones para que se detenga el array pero aqui en el **Do while tiene que ir primero el codigo y despues la condicion** y en el **While tiene que ir primero la condicion y despues el codigo**.

### Do While
![Do while](/Assets/img/arrayrecorrido1.png)

### While
![While](/Assets/img/arrayrecorrido2.png)



## For
Para realizar con este bucle necesitas tener una variable contadora para mostrar y tambien especificar las condiciones para que se detenga el array pero aqui en el **For tiene que ir primero la condicion, despues el codigo y por ultimo el incremento**.

![For](/Assets/img/arrayrecorrido3.png)


## Notas hasta aqui
Aqui en cada bucle estamos haciendo es que la variable i que es la que va a contar, va a empezar en 0 y va a ir aumentando de 1 en 1 hasta que llegue a la longitud del array, y mientras eso pase, se va a imprimir el valor de la posicion del array que se encuentre en la posicion final.

# Otras formas de recorrer un Array

Aqui vamos a ver variantes del bucle **for** que tienen funciones especificas para recorrer un array, y son las siguientes:

## For of
Este bucle lo que hace es que recorre el array y por cada elemento que encuentre, lo va a imprimir en la variable que le indiquemos. Este muestra el valor del array y no la posicion.

- Declarar la variable donde se va a guardar el valor del array
- Declarar el array

```js
for (let variable of array) {
  // code
}
```

![For of](/Assets/img/arrayrecorrido4.png)


## For in
Este bucle lo que hace es que recorre el array y por cada elemento que encuentre, lo va a imprimir en la variable que le indiquemos. Este muestra la posicion del array y no el valor.
- Declarar la variable donde se va a guardar el valor del array
- Declarar el array

```js
for (let variable in array) {
  // code
}
```

![For in](/Assets/img/arrayrecorrido5.png)
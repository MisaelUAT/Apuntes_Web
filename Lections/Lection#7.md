# Estructuras Repetitivas
Anteriormente vimos lo que son las estructuras de forma secuencial cuando nosotros queremos evaluar ciertas condiciones y que se cumplan ciertas acciones, pero que pasa cuando nosotros queremos que se repita una acción varias veces, para eso tenemos las estructuras repetitivas.

**Las estructuras repetitivas**  son aquellas que nos permiten ejecutar una o varias acciones un número determinado de veces, de acuerdo a una condición o valor de inicialización. Vamos a ver las siguientes:

- **While:** Mientras que la condición sea verdadera, se va a ejecutar el código.
- **Do While:** Se ejecuta el código y luego se evalúa la condición.
- **For:** Se ejecuta el código un número determinado de veces.

## While
Es una estructura de control iterativa o repetitiva, ya que permite ejecutar un bloque de instrucciones, siempre y cuando se cumpla una condición. La condición es evaluada, y si el resultado es verdadero se ejecuta el bloque de instrucciones, y si el resultado es falso, no se ejecuta el bloque de instrucciones.

```js
while (condición) {
    // Bloque de código
}
```

**Ejemplos de su uso:**

```js
let num = 5;
while (num < 10) {
    console.log(num);
    num++;
}
```
> Este bucle se ejecutará mientras que la variable num sea menor que 10, y en cada iteración se incrementará en 1 el valor de la variable num.

![While](/Assets/img/while.png)
> Aqui podemos observar que la variable inicial tiene valor de 10 y cuando ponemos el while es que sea menor o igual a 0. Entonces el ciclo se ejecutara hasta que la variable sea igual a 0 y restandole en cada vuelta 1.

## Do While
Permite ejecutar un bloque de instrucciones, siempre y cuando se cumpla una condición. La condición es evaluada, y si el resultado es verdadero se ejecuta el bloque de instrucciones, y si el resultado es falso, no se ejecuta el bloque de instrucciones.

```js
do {
    // Bloque de código
} while (condición);
```

**Ejemplos de su uso:**

```js
let e= 10;
do {
    console.log(e);
    e++;
} while(e <= 20)
```
> Este bucle se ejecutará mientras que la variable e sea menor o igual que 20, y en cada iteración se incrementará en 1 el valor de la variable e.

![Do While](/Assets/img/do-while.png)

## For
Es una estructura repetitiva que nos permite manipular la ejecucion mediante una variable contadora, la cual va incrementando su valor en cada iteracion, hasta que la condicion asignada se cumpla, la condicion que queremos que se cumpla y especificar si se va a incrementar o disminuir;
- Variable Contadora: Normalmente al principio se le pone esto para empezar el conteo. **Ejemplo: i = 0**
- Condicion: Es la condicion que queremos que se cumpla. **Ejemplo:  i < 10**
- Incremento o Decremento: Es la accion que queremos que se haga en cada vuelta. **Ejemplo: i++**

```js
for (variable; condición; incremento o decremento) {
    // Bloque de código
}
```

**Ejemplos de su uso:**

```js
let num_1;
for(num_1= 0; num_1 <= 10; num_1++){
    console.log(num_1);
}
```
> Este bucle se ejecutará mientras que la variable num_1 sea menor o igual que 10, y en cada iteración se incrementará en 1 el valor de la variable num_1.

![For](/Assets/img/for.png)
> Este bucle se ejecutara mientras que la varia i sea menor o igual a 0 y en cada vuelta se le restara 1 a la variable i.
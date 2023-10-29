# Metodos de Concatenacion de Strings

La concatenacion es una de las operaciones mas comunes en la programacion, ya que nos permite unir dos o mas cadenas de texto. En Javascript existen diferentes maneras de hacerlo:

- Operador **+**
- Funcion **concat()**
- Concatenacion con **${}**

## Operador **+**
Al igual que es un operador aritmetico, tambien nos v a a ayudar a concatenar cadenas de una forma mas simple como por ejemplo:

```js
//Variables a Unir
var nombre= "Misael";
var apellido= "Hernandez";
// Concatenacion
var resultado = nombre + apellido;
//Imprimir resultado
console.log(resultado);
```
![Resultado](/Assets/img/concat1.png)

> Recuerda que Javascript automaticamente convierte numeros a string cuando se concatenan con el signo de **_+_**

# Funcion Concat
Este metodo nos permite concatenar cadenas de texto, pero a diferencia del operador **+** este metodo nos permite concatenar cadenas de texto con variables numericas, ya que automaticamente las convierte a string.

```js
//Variables a Unir
var nombre= "Misael";
var apellido= "Hernandez";
// Concatenacion
var resultado= nombre.concat(apellido);
//Imprimir resultado
console.log(resultado);
```

![Resultado](/Assets/img/concat2.png)

> Usar este Metodo puede ser de gran ayuda cuando tenemos valores numericos de por medio.

# Concatenacion con ${}
Otra forma en la que podemos concatenar nuestros strings es con el uso de **${}**. Este metodo es muy util cuando queremos concatenar variables dentro de un string, ya que nos permite hacerlo de una forma mas sencilla.

```js
//Variables a Unir
var nombre= "Misael";
var apellido= "Hernandez";
// Concatenacion
var resultado= 'Mi nombre es ${nombre} y mi apellido es ${apellido}';
//Imprimir resultado
console.log(resultado);
```

![Resultado](/Assets/img/concat3.png)

> Consulta el codigo ASCII para saber caracteres especiales que se usan ya que para usar este metodo es necesario usar comillas invertidas **`**. En linux es **ctrl + u + 60**
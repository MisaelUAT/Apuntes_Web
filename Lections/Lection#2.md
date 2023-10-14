# Formas de Imprimir codigo

Cuando decimos la palabra **Impresion** nos referimos a mostrar en pantalla el codigo que nosotros queramos. Aqui se explicara las diferentes formas que hay para hacerlo.

## Consola
Una consola es aquella herramienta que nos permite ver los resultados de nuestro codigo en tiempo real de forma textual ya que esta no cuenta con interfaz grafica. Para acceder en ella necesitamos dos cosas:
* **Un compilador** de archivos javascript (En este caso usaremos una extension)
* Usar los **comandos especificos** para que se muestren los resultados

> El compilador que puedes usar es una extension en vscode llamado **Code Runner** que te permite compilar codigo de diferentes lenguajes de programacion.

<br>

![Code Runner](/Assets/img/code_runner.png)

### Comando para imprimir en consola
El comando que se usa para imprimir en consola es **console.log()** y dentro de los parentesis se pone el texto que se quiere imprimir. Ejemplo:

```js
//Imprimir texto
console.log("Hola Mundo");
//Imprimir valores de variables
var nombre= "Lucia";
console.log(nombre);
```

![Consola](/Assets/img/Formas_Impresion.png)

## Archivos html
Otra forma de imprimir codigo es mediante archivos html. Para ello necesitamos dos cosas:
- Una estructura html basica o compleja
- Un archivo javascript

> Para crear un archivo javascript se necesita crear un archivo con extension **.js** y enlazarlo con el archivo html mediante la etiqueta **script**.

## Etiqueta Script
Esta nos ayudara a **enlazar nuestro codigo** javascript a nuestro archivo html y poder ver los cambios que hagamos en el futuro.

![Script](/Assets/img/Formas_Impresion2.png)

> Ahora ya que tengamos nuestro codigo enlazado es momento de mostrarte los comandos que puedes usar para mostrar tus resultados en tu pagina.

### Prompt
Este comando nos permite mostrar un mensaje en pantalla y a su vez nos permite ingresar un valor que se almacenara en una variable. Ejemplo:

```js
// Imprimir texto y almacenar el valor en una variable
var nombre= prompt("Ingresa tu nombre");
```

![Prompt](/Assets/img/Formas_Impresion3.png)

**Como se va a mostrar en tu pagina:**

![Prompt](/Assets/img/prompt.png)

### Alert
Este comando nos permite mostrar un mensaje en pantalla pero no podemos ingresar un valor.
    
```js
// Imprimir texto
var hello= "Hola Mundo";
alert(hello);
``` 

![Alert](/Assets/img/Formas_Impresion4.png)

**Como se va a mostrar en tu pagina:**

![Alert](/Assets/img/alert.png)

# Calculador de salarios V2.0. - Lucio Perez Sanders

## ¿Cómo funciona?
Comenzamos definiendo las constantes que serían la información pública que corresponde al salario anual de Messi, Shakira e Ibai (41.000.000, 30.000.000 y 2.000.000 USD). 

Para iniciar la experiencia se solicita al usuario ingresar su salario mensual a través de un prompt() y aplicamos un cálculo matemático para obtener el valor anual, este valor lo guardamos en la variable salarioAnualUsuario.

Creamos una función llamada tiempoParaGanarlo y utilizamos el valor anterior como parámetro. Esta función realizará los cálculos matemáticos necesarios para obtener cuantos segundos, minutos, días y años tardaría Messi en ganar el salario anual ingresado por el usuario (salarioAnualUsuario)

Finalmente, la función muestra un mensaje usando alert() que devuelve el resultado al usuario.

Este código es una forma interesante de poner en perspectiva el salario de una figura famosa y mostrar cuánto dinero gana en comparación con la persona promedio.

![App Screenshot](https://i1.sndcdn.com/artworks-F11dor2dKfIo0DA6-zRbrxg-t500x500.jpg)
## Demo

https://sirkimeramon.github.io/calculadorDeSalarios/

## Actulizaciones version 2.0

-Agregadas las figuras públicas "Ibai" (2.000.000USD anuales)  y "Shakira" (30.000.000USD anuales)

-Agregada la clase "Usuario" (Esta clase almacena el salario anual del usuario)

-Creado el objeto "Usuario"

-Agregadas las siguientes funciones:
    -"tiempoParaGanarlo" (Realiza los cálculos necesarios para mostrar el tiempo en años,dias,horas y minutos que le tomaría a la figura ganar el mismo salario del usuario).

-Agregado el metodo .push para agregar las figuras públicas de la variable SALARIOS_ANUALES_FIGURAS_PUBLICAS al array figurasPublicas

```bash
let figurasPublicas = [];
  for (let figuraPublica in SALARIOS_ANUALES_FIGURAS_PUBLICAS) {
    figurasPublicas.push(figuraPublica);
  }

```

-Agregado el metodo .join en los arrays para listar las figuras públicas disponibles separadas por ","
```bash
 prompt(
    `Selecciona una figura pública para comparar tu salario anual:\n ${figurasPublicas.join(", ")}.`
    );

 alert(
      `La figura pública seleccionada no es válida. Por favor, selecciona una de las siguientes opciones: ${figurasPublicas.join(", ")}`
      );

```

## Actualizacion del parseInt por Math.floor

Acctualizamos con la funcion de orden superior Math.floor para el redondeo de los números.

```bash

if (SALARIOS_ANUALES_FIGURAS_PUBLICAS[figuraSeleccionada]) {
    let salarioAnualFiguraPublica =
      SALARIOS_ANUALES_FIGURAS_PUBLICAS[figuraSeleccionada];
    let segundosParaGanarSueldoUsuario =
      (usuario.salarioAnual / salarioAnualFiguraPublica) * SEGUNDOS_EN_ANIO;
    let aniosParaGanarSueldoUsuario = Math.floor(
      segundosParaGanarSueldoUsuario / SEGUNDOS_EN_ANIO
    );
    let diasParaGanarSueldoUsuario = Math.floor(
      (segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) / SEGUNDOS_EN_DIA
    );
    let horasParaGanarSueldoUsuario = Math.floor(
      ((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) /
        SEGUNDOS_EN_HORA
    );
    let minutosParaGanarSueldoUsuario = Math.floor(
      (((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) %
        SEGUNDOS_EN_HORA) /
        60
    );

```

## Actualizacion del bucle While

Acctualizamos el bucle While anterior (El primer acercamiento fue utilizar un bucle "for" pero solo conseguiamos un numero limitado de veces en las que el usuario podia ingresar mal su input, pero queriamos que fuesen infinitas)

```bash

pedirSalarioMensual() {
    let isNumber = false;
    while (!isNumber) {
      this.salarioMensual = prompt(`Ingresa tu salario mensual en dólares:`);
      if (this.salarioMensual === "") {
        alert(`No ingresaste ningún número, por favor vuelve a intentarlo.`);
      } else if (!isNaN(this.salarioMensual)) {
        isNumber = true;
      } else {
        alert(`No ingresaste un número válido, por favor vuelve a intentarlo.`);
      }
    }
  }

```

## Resumen actualizacion V2

-La clase Usuario tiene dos propiedades: salarioMensual y salarioAnual, ambas inicializadas en cero en el constructor.

-El método pedirSalarioMensual utiliza un bucle while para solicitar al usuario que ingrese su salario mensual en dólares hasta que ingrese un número válido.

-El método calcularSalarioAnual multiplica el salario mensual por 12 para obtener el salario anual.

-La función tiempoParaGanarlo calcula cuánto tiempo le tomaría a una figura pública seleccionada ganar el mismo salario anual que el usuario. 
Primero define las constantes SEGUNDOS_EN_HORA, SEGUNDOS_EN_DIA y SEGUNDOS_EN_ANIO para realizar los cálculos. Luego, obtiene las figuras públicas disponibles en la variable SALARIOS_ANUALES_FIGURAS_PUBLICAS y las muestra al usuario para que seleccione una.

 Si la figura seleccionada es válida, se obtiene su salario anual y se calcula cuánto tiempo le tomaría ganar el salario anual del usuario en años, días, horas y minutos.
 
 Si el usuario no selecciona una figura válida, se muestra una alerta informando que la opción no es válida y se llama a la función nuevamente para que el usuario seleccione una opción válida.

## Cosas que aprendimos.

- ParseInt() puede utilizarse para redondear números.

- Podemos utilizar isNaN para verificar si los datos ingresados son o no un número.

- Podemos reutilizar las funciones como tiempoParaGanarlo con otras figuras públicas y ahorrar código.

## Próximos pasos.

- Dar estilo y estructura a la página.

~~- Agregar más figuras influyentes (ej: Cristiano Ronaldo, Elon Musk, Shakira,etc ).~~

- Agregar soporte a distintos tipos de monedas.

- Agregar soporte para sugerencias de nuevas figuras influyentes.

- Cambiar método de entrada prompt().

- Cambiar método de salida alert().

-Agregar soporte para case sensitive en el nombre de las figuras públicas




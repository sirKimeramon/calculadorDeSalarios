// Clase Usuario
class Usuario {
  constructor() {
    //* Inicializa los salarios en 0.
    this.salarioMensual = 0;
    this.salarioAnual = 0;
  }

  //* Pide al usuario que ingrese su salario mensual hasta que ingrese un número válido. Contempla como inválido caracteres no numéricos y vacios
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

  //* Calcula el salario anual multiplicando el salario mensual por 12.
  calcularSalarioAnual() {
    this.salarioAnual = this.salarioMensual * 12;
  }
}

//? Funciones
function tiempoParaGanarlo() {
  //? Constantes para calcular el tiempo.
  const SEGUNDOS_EN_HORA = 3600;
  const SEGUNDOS_EN_DIA = 24 * SEGUNDOS_EN_HORA;
  const SEGUNDOS_EN_ANIO = SEGUNDOS_EN_DIA * 365;

  //* Obtiene las figuras públicas de SALARIOS_ANUALES_FIGURAS_PUBLICAS y las guarda en un array.
  let figurasPublicas = [];
  for (let figuraPublica in SALARIOS_ANUALES_FIGURAS_PUBLICAS) {
    figurasPublicas.push(figuraPublica);
  }

  //* Pide al usuario que seleccione una figura pública y compara su salario anual con el del usuario.
  let figuraSeleccionada = prompt(
    `Selecciona una figura pública para comparar tu salario anual:\n ${figurasPublicas.join(
      ", "
    )}.`
  );
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
    alert(
      `A ${figuraSeleccionada} le llevaría ${aniosParaGanarSueldoUsuario} años, ${diasParaGanarSueldoUsuario} días, ${horasParaGanarSueldoUsuario} horas, y ${minutosParaGanarSueldoUsuario} minutos ganar tu salario anual (${usuario.salarioAnual}).`
    );
  } else {
    //! Si el usuario no selecciona una figura válida,se muestra una alerta informando que la opción no es válida y se llama a la función nuevamente para que el usuario seleccione una opción válida.
    alert(
      `La figura pública seleccionada no es válida. Por favor, selecciona una de las siguientes opciones: ${figurasPublicas.join(
        ", "
      )}`
    );
    tiempoParaGanarlo();
  }
}

//? Variables constantes Globales
const SALARIOS_ANUALES_FIGURAS_PUBLICAS = {
  Messi: 41000000,
  Shakira: 30000000,
  Ibai: 2000000,
};

let usuario = new Usuario();
usuario.pedirSalarioMensual();
usuario.calcularSalarioAnual();
tiempoParaGanarlo();



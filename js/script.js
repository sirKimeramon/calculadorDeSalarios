const SALARIO_ANUAL_MESSI = 41000000;
let salarioMensualUsuario;
let isNumber = false;

while (!isNumber) {
  salarioMensualUsuario = prompt("Ingresa tu salario mensual en dólares:");

  if (!isNaN(salarioMensualUsuario)) {
    isNumber = true;
  } else {
    alert("No ingresaste un número válido, por favor vuelve a intentarlo.");
  }
}

let salarioAnualUsuario = salarioMensualUsuario * 12;

function tiempoParaGanarlo(salarioAnualUsuario) {
  const SEGUNDOS_EN_HORA = 3600;
  const SEGUNDOS_EN_DIA = 24 * SEGUNDOS_EN_HORA;
  const SEGUNDOS_EN_ANIO = SEGUNDOS_EN_DIA * 365;

  let segundosParaGanarSueldoUsuario = (salarioAnualUsuario / SALARIO_ANUAL_MESSI) * SEGUNDOS_EN_ANIO;
  let aniosParaGanarSueldoUsuario = Math.floor(segundosParaGanarSueldoUsuario / SEGUNDOS_EN_ANIO);
  let diasParaGanarSueldoUsuario = Math.floor((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) / SEGUNDOS_EN_DIA);
  let horasParaGanarSueldoUsuario = Math.floor(((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) / SEGUNDOS_EN_HORA);
  let minutosParaGanarSueldoUsuario = Math.floor((((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) % SEGUNDOS_EN_HORA) / 60);

  alert(`A Messi le llevaría ${aniosParaGanarSueldoUsuario} años, ${diasParaGanarSueldoUsuario} días, ${horasParaGanarSueldoUsuario} horas, y ${minutosParaGanarSueldoUsuario} minutos ganar tu salario anual (${salarioAnualUsuario}).`);
}

tiempoParaGanarlo(salarioAnualUsuario);

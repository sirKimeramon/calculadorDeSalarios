const SALARIO_ANUAL_MESSI = 41000000; 
let salarioMensualUsuario = prompt("Ingresa tu salario mensual en dólares:");

if (isNaN(salarioMensualUsuario)) {
  alert("El dato ingresado no es un nùmero, no te hagas el loco. Refresca la página y vuelve a intentarlo");
} else {
  let salarioAnualUsuario = salarioMensualUsuario * 12;

  function tiempoParaGanarlo(salarioAnualUsuario) {
    const SEGUNDOS_EN_HORA = 3600;
    const SEGUNDOS_EN_DIA = 24 * SEGUNDOS_EN_HORA;
    const SEGUNDOS_EN_ANIO = SEGUNDOS_EN_DIA * 365;

    let segundosParaGanarSueldoUsuario = (salarioAnualUsuario / SALARIO_ANUAL_MESSI) * SEGUNDOS_EN_ANIO;
    let aniosParaGanarSueldoUsuario = parseInt(segundosParaGanarSueldoUsuario / SEGUNDOS_EN_ANIO);
    let diasParaGanarSueldoUsuario = parseInt((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) / SEGUNDOS_EN_DIA);
    let horasParaGanarSueldoUsuario = parseInt(((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) / SEGUNDOS_EN_HORA);
    let minutosParaGanarSueldoUsuario = parseInt((((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) % SEGUNDOS_EN_HORA) / 60);

    alert(`A Messi le llevaría ${aniosParaGanarSueldoUsuario} años, ${diasParaGanarSueldoUsuario} días, ${horasParaGanarSueldoUsuario} horas, y ${minutosParaGanarSueldoUsuario} minutos ganar tu salario anual (${salarioAnualUsuario}).`);
  }

  tiempoParaGanarlo(salarioAnualUsuario);
} 
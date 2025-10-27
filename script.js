document.getElementById('calcular').addEventListener('click', function() {
  const monto = parseFloat(document.getElementById('monto').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);

  // Validación de entrada
  if (isNaN(monto) || isNaN(porcentaje) || monto <= 0 || porcentaje < 0) {
    alert('Por favor, ingresa valores válidos.');
    return;
  }

  // Cálculo de la propina y total
  const propina = (monto * porcentaje) / 100;
  const total = monto + propina;

  // Mostrar resultados en el DOM
  document.getElementById('propina').textContent = propina.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
});

document.getElementById('feriasForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const salario = parseFloat(document.getElementById('salario').value);
    const dias = parseInt(document.getElementById('dias').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (isNaN(salario) || isNaN(dias) || dias < 1 || dias > 30) {
      resultadoDiv.innerHTML = 'Preencha os campos corretamente.';
      return;
    }
  
    const valorProporcional = (salario / 30) * dias;
    const umTerco = valorProporcional / 3;
    const total = valorProporcional + umTerco;
  
    resultadoDiv.innerHTML = `
      <strong>Resultado:</strong><br>
      Valor proporcional: R$ ${valorProporcional.toFixed(2)}<br>
      Adicional 1/3: R$ ${umTerco.toFixed(2)}<br>
      <strong>Total a receber: R$ ${total.toFixed(2)}</strong>
    `;
  });
  
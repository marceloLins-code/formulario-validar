function validarFormulario() {
  var campoA = document.getElementById('campoA').value;
  var campoB = document.getElementById('campoB').value;

  if (parseInt(campoB) > parseInt(campoA)) {
    alert("Formulário validado com sucesso");
    return true;
  } else {
    alert("Formulário invalidado");
    return false;
  }
}
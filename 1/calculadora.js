function calcular() {
    var numero1 = parseInt($('#numero1').val());
    var numero2 = parseInt($('#numero2').val());
    var operacion = $('#operacion').val();

    var resultado = 0;

    switch (operacion) {
      case 'suma':
        resultado = numero1 + numero2;
        break;
      case 'resta':
        resultado = numero1 - numero2;
        break;
      case 'multiplicacion':
        resultado = numero1 * numero2;
        break;
      case 'division':
        resultado = numero1 / numero2;
        break;
      default:
        resultado = 'Error';
    }

    $('#resultado').val(resultado);
  }

  // Evento click del botón "Calcular"
  $('#calcular').click(function() {
    calcular();
  });
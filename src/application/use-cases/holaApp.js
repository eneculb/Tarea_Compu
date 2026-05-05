const Saludo = require('../../domain/entities/holaDominio');
class ObtenerSaludo {
  ejecutar(nombre) {
    const saludo = new Saludo(nombre);
    return saludo.obtenerMensaje();
  }
}
module.exports = ObtenerSaludo;
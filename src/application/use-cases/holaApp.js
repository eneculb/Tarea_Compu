const Holadominio = require('../../domain/entities/holaDominio');

class holaApp {
  execute() {
    const holadominio = new Holadominio('Hola Mundo');
    return holadominio.getMen();
  }
}

module.exports = holaApp;
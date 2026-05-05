class Saludo {
  constructor(nombre) {
    this.nombre = nombre;
  }
  obtenerMensaje() {
    return `¡Hola Mundo desde ${this.nombre}!`;
  }
}
module.exports = Saludo;
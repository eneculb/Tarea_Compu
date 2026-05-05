const ObtenerSaludo = require('../../application/use-cases/holaApp');
const controladorSaludo = () => {
  const casoDeUso = new ObtenerSaludo();
  const mensaje = casoDeUso.ejecutar("Clean Architecture");
  console.log(mensaje);
};
module.exports = controladorSaludo;
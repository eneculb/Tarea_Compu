const holaApp = require('../application/use-cases/holaApp');

class holaInterfaz {
  handle() {
    const holaAppInterfaz = new holaApp();
    const mes = holaAppInterfaz.execute();
    console.log(mes);
  }
}

module.exports = holaInterfaz;
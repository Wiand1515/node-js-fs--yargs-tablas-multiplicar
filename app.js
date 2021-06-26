const { tabla } = require("./helpers/multiply");
const argv = require('./config/yargs');
const colors = require('colors');




console.clear();


tabla(argv.n, argv.l, argv.t)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))

  .catch((err) => console.log(err));

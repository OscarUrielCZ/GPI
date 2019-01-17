const name = {
    demand: true,
    alias: 'n',
    desc: 'Nombre del programa'
};

const desc = {
    alias: 'd',
    default: '',
    desc: 'Descripción de la instalación del programa'
};

const date = {
    dafault: '',
    desc: 'Fecha de la instalación del programa'
};

const filter = {
  alias: 'f',
  default: '',
  desc: 'Filtra los resultados que deseas ver'
};

const command = {
    demand: true,
    alias: 'c',
    desc: 'Comando a agregar'
};

const argv = require('yargs')
    .command('nuevo', 'Agrega un programa nuevo', {
        name,
        date,
        desc
    })
    .command('actualizar', 'Actualiza la incformación de un programa', {
        name,
        date,
        desc
    })
    .command('borrar', 'Borra un programa de tu lista', {
        name
    })
    .command('listar', 'Listar los programas guardados', {
      filter
    })
    .command('comando', 'Agrega un comando a un programa', {
        name,
        command
    })
    .help()
    .argv;

module.exports = argv;

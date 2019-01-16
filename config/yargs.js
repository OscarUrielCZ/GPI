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
    .help()
    .argv;

module.exports = argv;
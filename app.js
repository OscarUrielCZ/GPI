const argv = require('./config/yargs');
const prog = require('./gpi/program');

const command = argv._[0];

switch (command) {
    case 'nuevo':
        let saved = prog.add(argv.name, argv.date, argv.desc);
        console.log(saved);
        break;

    case 'actualizar':
        let updated = prog.update(argv.name, argv.date, argv.idesc);
        console.log(updated);
        break;

    case 'listar':
        let listed = prog.list();

        for (let p of listed) {
            prog.printProgram(p);
            console.log('');
        }
        break;

    case 'borrar':
        let removed = prog.remove(argv.name);
        console.log(removed);
        break;

    default:
        console.log('Error: comando no reconocido, usar "node app --help" para ver ayuda')
}
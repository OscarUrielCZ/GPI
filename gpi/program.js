const colors = require('colors');
const fs = require('fs');

let allPrograms = [];

const loadDB = () => {
    try {
        allPrograms = require('../db/data.json');
    } catch (err) {
        allPrograms = [];
    }
};

const saveDB = () => {
    let data = JSON.stringify(allPrograms);

    fs.writeFile('db/data.json', data, err => {
        if (err) throw err
    });
};

const exists = name => {
    return getIndexByName(name) >= 0;
};

const getIndexByName = name => {
    return allPrograms.findIndex(prog => prog.name.toLowerCase() == name.toLowerCase());
};

const list = constrain => {
    loadDB();

    let regexp = new RegExp(constrain, 'i');
    let result = allPrograms.filter(prog => prog.name.match(regexp));

    return result;
};

const add = (name, date = '', desc = '') => {
    loadDB();

    if (exists(name))
        return null;

    let program = {
        name,
        date,
        desc,
        commands: []
    };

    allPrograms.push(program);
    saveDB();

    return program;
};

const update = (name, date, desc) => {
    loadDB();

    if (!exists(name))
        return false;

    let updated = allPrograms[getIndexByName(name)];

    if (date) {
        updated.date = date;
    }
    if (desc) {
        updated.desc = desc;
    }

    saveDB();

    return true;
};

const remove = name => {
    loadDB();

    let newlist = allPrograms.filter(prog => prog.name.toLowerCase() != name.toLowerCase());

    if (newlist.length == allPrograms.length) {
        return false;
    }

    allPrograms = newlist;
    saveDB();

    return true;
};

const printProgram = program => {
    console.log(program.name.green);
    if (program.date) {
        console.log('  Fecha de instalación:', program.date);
    }
    if (program.desc) {
        console.log('  Especificaciones:', program.desc);
    }
    if (program.commands.length) {
        console.log('  Comandos: ');
        for (let c of program.commands) {
            console.log('    >', c);
        }
    }
};

const addCommand = (name, command) => {
    loadDB();

    if (!exists(name)) {
        return false;
    }

    allPrograms[getIndexByName(name)].commands.push(command);
    saveDB();

    return true;
};

module.exports = {
    add,
    update,
    list,
    printProgram,
    remove,
    addCommand
};

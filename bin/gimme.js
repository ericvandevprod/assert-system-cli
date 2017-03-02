const path = require('path');
const yargs = require('yargs');

const argv = yargs
    .commandDir(path.join(__dirname, './../cmds'))
    .demandCommand(1)
    .help()
    .argv;
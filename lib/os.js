const os = require('os');

var details = [];

let cores = () => {
    var cores = os.cpus().length;
    details.push(`There are ${cores} cores currently running`);
};

cores();

module.exports = { details };
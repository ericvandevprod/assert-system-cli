const os = require('./../lib/os');

exports.command = 'system <command>';
exports.desc = 'system info only';
exports.builder = function (yargs) {
    console.log('from system');
};
exports.handler = function (argv) {
    os.details.forEach((line) => {
        console.log(line);
    });
};
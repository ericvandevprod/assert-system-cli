exports.command = 'everything <command>';
exports.desc = 'system and file info';
exports.builder = function (yargs) {
    console.log(`from everything ${JSON.stringify(yargs.argv, undefined, 2)}`);
};
exports.handler = function (argv) {
    console.log(`this is the argv ${JSON.stringify(argv, undefined, 2)}`);
};
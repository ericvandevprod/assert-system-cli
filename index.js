`use strict`;

const fs = require(`fs`);
const yargs = require(`yargs`);
const program = require(`commander`);
const meow = require(`meow`);

const cli = meow(`
    Usage
      $ foo <input>

    Options
      -r, --rainbow  Include a rainbow

    Examples
      $ foo unicorns --rainbow
      🌈 unicorns 🌈
`, {
    alias: {
        r: 'rainbow'
    }
});

console.log(cli.input);
console.log(cli.flags);

// const options = {
//     titleOptions: {
//         describe: 'Title of the note',
//         demand: true,
//         alias: 't'
//     },
//     bodyOptions: {
//         describe: 'Body of the note',
//         demand: true,
//         alias: 'b'
//     }
// }
//
// const argv = yargs
//     .command('get', 'To add a new note', {
//         title: options.titleOptions,
//         body: options.bodyOptions
//     })
//     .command('list', 'List all the notes')
//     .command('read', 'Read a note', {
//         title: options.titleOptions
//     })
//     .command('remove', 'Remove a note', {
//         title: options.titleOptions
//     })
//     .help()
//     .argv;
//
// console.log(argv);

// function range(val) {
//   return val.split('..').map(Number);
// }
//
// function list(val) {
//   return val.split(',');
// }
//
// function collect(val, memo) {
//   memo.push(val);
//   return memo;
// }
//
// function increaseVerbosity(v, total) {
//   return total + 1;
// }
//
// program
//   .version('0.0.1')
//   .usage('[options] <file ...>')
//   .option('-i, --integer <n>', 'An integer argument', parseInt)
//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
//   .parse(process.argv);
//
// console.log(' int: %j', program.integer);
// console.log(' float: %j', program.float);
// console.log(' optional: %j', program.optional);
// program.range = program.range || [];
// console.log(' range: %j..%j', program.range[0], program.range[1]);
// console.log(' list: %j', program.list);
// console.log(' collect: %j', program.collect);
// console.log(' verbosity: %j', program.verbose);
// console.log(' args: %j', program.args);

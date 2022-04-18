#! /usr/bin/env node

const { program } = require('commander');
const figlet = require('figlet');
const packageInfo = require('../package.json');

const VERSION = packageInfo.version;

program.on('--help', () => {
    console.log(`
        ${figlet.textSync(packageInfo.name, {
            font: 'Ghost',
            width: 80,
            whitespaceBreak: true,
        })}
    `);
});

program.version(`v${VERSION}`).usage('<command> [option]');

program.parse(process.argv);

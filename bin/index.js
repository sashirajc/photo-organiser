#! /usr/bin/env node

const { Command } = require('commander');
const program = new Command();

const organise = require('./commands/organise');
const packageJson = require('../package.json');

program
    .name('photo-organiser')
    .description(packageJson.description)
    .version(packageJson.version);

program
    .command('by-dmy')
    .description('Organise all photos inside the current working directory by date month and year')
    .action(organise);

program.parse();
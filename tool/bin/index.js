#!/usr/bin/env node
// import chalk from 'chalk';
const chalk = require('chalk');
const arg = require('arg');
// const pkgUp = require('pkg-up');
// import {pkgUp} from 'pkg-up';

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    if (args['--start']) {
        const pkg = require(path.join(process.cwd(), 'package.json'))
        //TODO: do something with pkg
        console.log(chalk.bgCyanBright('starting the app'));
    }
} catch (e) {
    console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
}
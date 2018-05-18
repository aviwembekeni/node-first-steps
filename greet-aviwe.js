var figlet = require('figlet');
const chalk = require('chalk');
const greet = require('./greet');

//const styledMessage = chalk.bgGreen.black(greet('Aviwe'));

figlet.text(greet('Aviwe'), {
    font: 'Ghost',
    horizontalLayout: 'full',
    verticalLayout: 'full'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});

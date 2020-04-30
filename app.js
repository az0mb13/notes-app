const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes')


//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body', 
            demandOption: true,
            typ: 'string'
        }
    },
    handler: function(argv){
        console.log('Title:', argv.title)
        console.log('Body', argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    handler: function(){
        console.log('Removing the note') 
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'List a note', 
    handler: function(){
        console.log('Listing the note')
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note', 
    handler: function(){
        console.log('Reading the note')
    }
})

yargs.parse();
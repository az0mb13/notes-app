const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')


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
    handler (argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note Title', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'List a note', 
    
    handler (){
        notes.listNote()
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read a note', 
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse();
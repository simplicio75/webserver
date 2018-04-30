const argv = require('yargs')
    .command('creare','creare un task',{
        desc:{
            demand:true,//obligatorio,
            alias:'d',
            desc:'descrizione del task'
        }

    })
    .command('aggiornare', 'aggiornare un task', {
        desc: {
            demand: true,//obligatorio,
            alias: 'd',
            desc: 'descrizione del task'
        },
        completato:{
            default:true,
            alias: 'c',
            desc: 'Segna come completato o appeso il task'
        }

    })
    .command('remove', 'cancellare un task', {
        remove: {
            demand: true,//obligatorio,
            alias: 'r',
            desc: 'cancellare del task'
        }

    })
    .help()
    .argv;

    module.exports={
        argv
    }
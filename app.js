const argv = require('./config/yargs').argv;
const task = require('./task/task');
const http= require("http");
var colors = require('colors');
const fs = require('fs');
const CircularJSON = require('circular-json');
const port=3000;
//oggetti che si creano appena node entra in funzione
let pro = CircularJSON.stringify(process);
let mod = CircularJSON.stringify(module); //con module esportiamo funzioni tra i file di progett
//*****************gestione dei comandi yargs************************************************ */
// console.log(argv);
let comando= argv._[0]; //array dei comandi
switch (comando){
    case 'creare':
        let task1=task.creareTask(argv.desc);
        console.log(task1);
        break;
    case 'remove':
        // console.log('remove:',argv.remove);
        let task2 = task.remove(argv.remove);
        if (task2>=0)
            console.log("cancellato");
        break;
    case 'lista':
        let ListaTask = task.getDB();
        for (let task of ListaTask){
            console.log('============DA FARE========='.green);
            console.log('descrizione:'.red,task.desc);
            console.log('stato:'.red, task.completato);
            console.log('============================'.green);
        }
        break;
    case 'aggiornare':
        let new_task = task.aggiornareTask(argv.desc, argv.completato);
        for (let task of new_task) {
            if (task.completato===true)
                console.log('============FATTO========='.yellow);
            else
                console.log('============DA FARE========='.green);
            console.log('descrizione:'.red, task.desc);
            console.log('stato:'.red, task.completato);
            console.log('============================'.green);
        }
        break;
    default:
        break;

}
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write("hello");
    //res.write(JSON.stringify(process));
    //res.write(mod);
    res.end();
}).listen(port);

// //
// fs.writeFile('process.txt', pro, (err) => {
//     if (err) throw err;
//     console.log('The file process.txt has been saved!');
// });
// fs.writeFile('module.txt', mod, (err) => {
//     if (err) throw err;
//     console.log('The file module.txt has been saved!');
// });
// console.log(`server on ${port}`);
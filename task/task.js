const fs = require('fs');

let tasks =[];
const remove=(desc)=>{
    caricaDB();
    var result=tasks.findIndex((element,index)=>{
        //console.log(element.desc,desc);
        if(element.desc===desc){
            //console.log("trovato",index);
            tasks.splice(index,1);
            saveDB();
            return index;
        }
    })
    return result;
}
const getDB=()=>{
    caricaDB();
    return tasks;
}
const saveDB = ()=>{
    let data = JSON.stringify(tasks);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('impossibile salvare');
        console.log('The file data.json has been saved!');
    });
};
const caricaDB=()=>{
    try{
        tasks = require("../db/data.json");
    }
    catch(err){
        tasks = [];
    }
    
}
const creareTask = (desc) =>{
    let task={
        desc,
        completato:false
    };
    caricaDB();
    tasks.push(task);
    saveDB();
    return task;
}
const findTask =(task,desc)=>{
    return task.desc=desc;

}
const aggiornareTask = (desc,stato = true)=>{ //inserisco parametro di default su stato = true
    caricaDB();
    let new_task=tasks.map(x =>{
        if(x.desc===desc){
            x.completato = (stato == 'true');
        }
        return x;
        
    })
    saveDB();
    return new_task;
}
module.exports={
    creareTask,
    getDB,
    aggiornareTask,
    remove
}
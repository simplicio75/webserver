process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV ==='dev'){
    urlDB="mongodb://localhost:27017/galdierirent";
}
else{
    urlDB = "mongodb://galdierirent:galdierirent@ds119258.mlab.com:19258/galdierirent";
}
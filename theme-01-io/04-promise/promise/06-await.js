// организация функции async/await

fs = require('fs');

fileNameIn = "in.txt";
fileNameOut = "out.txt";

function getTxt(fileNameIn) {
    return new Promise((res,rej) => {
        fs.readFile(fileNameIn,'utf8',(err,txt)=>res(txt));
    });
};

async function work() {
    console.log('___start___');
    let txt = await getTxt(fileNameIn); // только для промисов
    // так можно писать линейный код
    console.log(txt);
    console.log('___stop___');
}

work();

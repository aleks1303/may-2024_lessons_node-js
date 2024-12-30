// const { foo } = require('./helpers/helpers')
//
//
// console.log('_________main.js_________');
//
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd())
//
// foo()

// const readline = require('readline/promises')
// const fs = require('node:fs/promises')
// const path = require("node:path");
// const os = require("node:os")
// const emitter = require("node:events")
const fsCb = require("node:fs")


const foo = async () => {

// //     readline - question-answer
// const rlInterface = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
//
// const name = await rlInterface.question('What is your name?' )
//     console.log(`Hello ${name}`);
//   // rlInterface.close(); //закриває термінал
//     const age = await rlInterface.question('How old are you?' )
//     console.log(`You are ${age} years old`);
//     process.exit(0) // cтопнули примусово

// fs - файлова система
// дає можливість працювати з файловою системою
//     await fs.writeFile('test.json', JSON.stringify([{name: 'Alex', age: 40}, {name: 'Marina', age: 33},{name: 'Sophia', age: 11}, {name: 'Timothy', age: 7}], null, 2));
//
//    await fs.writeFile('test.txt', `Hello World, this is me!`)
//    const data = await fs.readFile(path.join(process.cwd(), 'test.txt'), "utf-8" );
//     // console.log(data)
//     const data2 = await fs.readFile(path.join(process.cwd(), 'test.json'), "utf-8" )
    // console.log(data2)
    // console.log(JSON.parse(data2))
    // await fs.appendFile('test.txt', '\nHow are you?') // додати до файлу, \n - на новий рядок
    // await fs.rename('test.json', 'helpers/test2.json')
    // await fs.copyFile('test.txt', 'test2.txt') //робимо копію
    //await fs.mkdir(path.join(process.cwd(), 'dir1', 'dit2', 'dir3'), {recursive:true}); //створює папки
    // await fs.rmdir(path.join(process.cwd(), 'dir1', 'dit2', 'dir3')); // видаляємо останню папку
    // await fs.rm(path.join(process.cwd(), 'dir1'), {recursive:true, force:true}) // видалити все з першої папки і те що в ній є
    // await fs.unlink('test2.txt') // видаляє файли
    // const stat = await fs.stat(path.join(process.cwd())) // чи це папка чи файл (info)
    // console.log(stat.isDirectory())

    //     вкладенні накладні на одному рівні
    // створюємо папки на одному різні через цикл
    // const dirs = ['dir1', 'dir2', 'dir3', 'dir4']
    // for (const dirName of dirs ) {
    // await fs.mkdir(path.join('mainDir', dirName))
    // }




//     module os
//     доступ до операційної системи, дістати інформацію
//     console.log(os.arch())
//     console.log(os.cpus())
//     console.log(os.freemem() / 1024/ 1024/ 1024)
//     console.log(os.totalmem() / 1024/ 1024/ 1024)
//     console.log(os.homedir())
//     console.log(os.hostname())
//     console.log(os.release())
//     console.log(os.uptime())
//     console.log(os.platform())
//     console.log(os.tmpdir())
//     console.log(os.type())
//     console.log(os.userInfo())
//     console.log(os.version())
//     console.log(os.networkInterfaces())


// events
// підписка
// const em = new emitter.EventEmitter();
// em.on('first_visit', (name, age) => {
//     // send email
//     console.log(`First visit [email] to ${name} ${age}` );
//
// });
// em.on('first_visit', () => {
//     // send sms
//     console.log('First visit [sms]')
// })
// //     скільки emit стільки раз вони викликаються
// em.emit('first_visit', 'Alex', 40);
// em.emit('first_visit', 'Alex', 41);
// em.emit('first_visit', 'Alex', 42);
// em.emit('first_visit', 'Alex', 43);

// інша подія
// em.once('second visit', () => {
//     console.log('Second visit')
// });
// викликається лише раз
// em.emit('second visit');
// em.emit('second visit');

//stream
//для того, щоб під час читання великих файлів не перевантажувати оперативну пам'ять
// stream ділить один великий файл (це може бути відео) на маленькі кусочки (chunk)
// const readStream = fsCb.createReadStream('citroen_c4.pdf')
// const writeStream = fsCb.createWriteStream('citroen_c4-2.pdf')
// // readStream.on('data', (chunk) => {
// //     writeStream.write(chunk);
// // })
// readStream.pipe(writeStream) // аналогія попереднього коду
}
void foo()
// hw-1
// знайти модуль http
// запустити на server
// const http = require('node:http');

// дає можливість працювати з шляхами
// будувати шляхи, нормалізовувати шляхи
// парсити шляхи
const path = require('node:path');
const fs = require('node:fs/promises');


// const foo = async () => {
// // // http
// // // Create a local server to receive data from
// //     const server = http.createServer((req, res) => {
// //         res.writeHead(200, { 'Content-Type': 'application/json' });
// //         const url = req.url;
// //         if (url === '/about'){
// //             switch (req.method) {
// //                 case'GET':
// //                 return res.end(JSON.stringify({
// //                     data:'About Page'
// //                 }));
// //                 case 'POST':
// //                     return res.end(JSON.stringify({
// //                         data:'About Page'
// //                     }))
// //             }
// //
// //         }
// //         if (url === '/contact'){
// //             return res.end(JSON.stringify({
// //                 data:'Contact Page'
// //             }))
// //         }
// //
// //         res.end(JSON.stringify({
// //             data: 'Hello World!',
// //         }));
// //     });
// //
// //     server.listen(8000);
// //
//
//     // додає слеш
//     const pathToHelper = path.join(__dirname, 'helpers', 'helpers.js');
//
//     // віддає ім'я файлу з розширенням
//     console.log(path.basename(pathToHelper));
//
//     // віддає шлях до папки
//     console.log(path.dirname(pathToHelper));
//
//     // повертає розширення файлу
//     console.log(path.extname(pathToHelper));
//
//     // розбиває все на об'єкти
//     console.log(path.parse(pathToHelper));
//
//     //перебирає правильність шляху і прибирає різні зайві слеші
//     console.log(path.normalize('/Users/admin/IdeaProjects////may-2024_lessons_node-js/helpers'));
//
//     // чи цей шлях абсолютний, чи починається зі слеш
//     console.log(path.isAbsolute('/Users/admin/IdeaProjects////may-2024_lessons_node-js/helpers'));
// }
// void foo()






//hw-2 створення папок
const foo = async () => {
    const pathToFile = path.join(__dirname, 'baseFolder');
    await fs.mkdir(pathToFile, { recursive: true });

    const folders = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5'];
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

    await Promise.all(folders.map(async (folder) => {
    const folderPath = path.join(pathToFile, folder);
    await fs.mkdir(folderPath, { recursive: true });

    await Promise.all(files.map(async (file) => {
        await fs.writeFile(path.join(folderPath, file), 'Hello World!');
    }))
    }));

    const data = await fs.readdir(pathToFile);
    for (const folder of data) {
        const folderPath = path.join(pathToFile, folder);
        const files = await fs.readdir(folderPath, { recursive: true });
        const stat = await fs.stat(folderPath);
        console.log(`File: ${folderPath} - Is File: ${stat.isDirectory()}`)
        for(const file of files) {
            const filePath = path.join(folderPath, file);
            const stat = await fs.stat(filePath);
            console.log(`File: ${filePath} - Is File: ${stat.isDirectory()}`)

        }
    }


}
void foo ()










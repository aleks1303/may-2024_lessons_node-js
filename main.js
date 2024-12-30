// hw-1
// знайти модуль http
// запустити на server
const http = require('node:http');

// дає можливість працювати з шляхами
// будувати шляхи, нормалізовувати шляхи
// парсити шляхи
const path = require('path');

const foo = async () => {
// // http
// // Create a local server to receive data from
//     const server = http.createServer((req, res) => {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const url = req.url;
//         if (url === '/about'){
//             switch (req.method) {
//                 case'GET':
//                 return res.end(JSON.stringify({
//                     data:'About Page'
//                 }));
//                 case 'POST':
//                     return res.end(JSON.stringify({
//                         data:'About Page'
//                     }))
//             }
//
//         }
//         if (url === '/contact'){
//             return res.end(JSON.stringify({
//                 data:'Contact Page'
//             }))
//         }
//
//         res.end(JSON.stringify({
//             data: 'Hello World!',
//         }));
//     });
//
//     server.listen(8000);
//

    // додає слеш
    const pathToHelper = path.join(__dirname, 'helpers', 'helpers.js');

    // віддає ім'я файлу з розширенням
    console.log(path.basename(pathToHelper));

    // віддає шлях до папки
    console.log(path.dirname(pathToHelper));

    // повертає розширення файлу
    console.log(path.extname(pathToHelper));

    // розбиває все на об'єкти
    console.log(path.parse(pathToHelper));

    //перебирає правильність шляху і прибирає різні зайві слеші
    console.log(path.normalize('/Users/admin/IdeaProjects////may-2024_lessons_node-js/helpers'));

    // чи цей шлях абсолютний, чи починається зі слеш
    console.log(path.isAbsolute('/Users/admin/IdeaProjects////may-2024_lessons_node-js/helpers'));
}
void foo()
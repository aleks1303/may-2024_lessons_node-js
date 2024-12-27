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

const readline = require('readline')

const foo = async () => {
const rlInterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rlInterface.question('What is your name?', (name) => {
    console.log(`Hello ${name}`);
    rlInterface.close()
})

}
void foo()
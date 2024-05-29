const chalk = require("chalk");
var validator =require(`validator`);

console.log(chalk.red.italic.bold.underline.inverse("hello world"));

const res=validator.isEmail(`rk7255053708@gmail.com`);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

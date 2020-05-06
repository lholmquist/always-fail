const chalk = require('chalk');

function alwaysFail() {
  console.log(chalk.red('This is running in a postinstall script and should always fail'));
  console.log(`    `);

  process.exit(-1);
}

module.exports = {
  alwaysFail
}

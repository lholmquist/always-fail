function alwaysFail() {
  console.log('This is running in a postinstall script and should always fail');

  process.exit(-1);
}

module.exports = {
  alwaysFail
}

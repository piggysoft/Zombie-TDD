module.exports = {
  paths: [
    "lib/**/*.js",
    "test/**/*.js"
  ],
  linter: "jslint",
  linterOptions: {
    indent: 2,
    maxlen: 85,
    sloppy: false,
    regexp: true,
    browser: true,
    node: true,
    predef: [ "ZOMBIE", "buster", "$", "assert", "refute", "EventEmitter", "jQuery" ]
  }
};

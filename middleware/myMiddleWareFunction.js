'use strict';

const myMiddleWareFunction = (req, res, next) => {
  console.log('We ran baby!');
  next();
};

module.exports = { myMiddleWareFunction };

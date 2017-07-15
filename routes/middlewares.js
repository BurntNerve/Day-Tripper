
module.exports = {
  myMiddlewareFunc: (req, res, next) => {
    console.log("We ran baby!");
    next();
  }
}

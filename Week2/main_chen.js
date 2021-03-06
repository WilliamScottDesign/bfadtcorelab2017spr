//As you have probably guessed, the require('./myModule') is used to import the contents from another JavaScript file. The initial './' indicates that the file is located in the same directory as 'main.js'. Also note that you don't have to provide the file extension, as '.js' is assumed by default.

var myModule = require('./myModule');
console.log('Text from module:', myModule.myText);

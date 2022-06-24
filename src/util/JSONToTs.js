
/* Exports to /type directory an  Interface */
const JsonToTS = require('json-to-ts')

const json = {
        userId: 715,
        menuId: 52
    };
var interfaceName = 'IAppParam';

JsonToTS(json).forEach( typeInterface => {

    var fs = require('fs');
    let codeString = typeInterface.replace('RootObject', interfaceName) + "\n\n" + "export default "+interfaceName+";";


    fs.writeFile("../type/" + interfaceName + '.tsx',
            codeString, function (err) {
            if (err) return console.log(err);
            console.log('Hello World > helloworld.txt');
    });
})

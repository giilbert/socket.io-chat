const { writeFile }= require('fs');
const { join } = require('path')
let messages = require('./messages.json');

//
// a: author
// c: content
// t: time
//
exports.getMessages = () => {
    return JSON.stringify(require('./messages.json'));
}


exports.appendMessage = (message) => {
    messages.data.push({
        a: message.author,
        c: message.content,
        t: message.time
    });

    writeFile(join(__dirname, 'messages.json'), JSON.stringify(messages), () => {
        // TODO: set callback in case of error
    });
}
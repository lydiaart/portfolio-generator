const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()`method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()`method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyfile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject({
                ok:false,
                message:'Something went wrong!',
                err
                });
                return;
            }

            resolve({
                ok: true,
                message:'Stylesheet created!',
                err
            });
        });
    });
};

module.exports = { writeFile, copyFile };
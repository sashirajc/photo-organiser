const fs = require('fs');
const path = require('path');

const currentWorkingDirectory = process.cwd();

const getDirName = (dirType) => {
    const date = new Date();
    return `./${dirType}-${date.getHours()}-${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

const createNewDir = (dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
        console.log('Created new directory with the name: ', dir);
    }
}

const createNewSafeDirectory = () => {
    const newDirName = getDirName('New');
    console.log('Creating a new directory to store the moved pictures: ', newDirName);
    createNewDir(newDirName);
    return newDirName;
}

const moveFile = (filename, newLocation) => {
    fs.rename(path.join(currentWorkingDirectory, filename), path.join(currentWorkingDirectory, newLocation, filename),
    err => { 
        if (err) {
            console.log('Encountered error:', err)
            throw err;
        }   
    });
};

const getFileStats = filename => fs.statSync(filename);

const getBirthTime = fileStats => fileStats.birthtime;

module.exports = {
    getDirName,
    createNewDir,
    moveFile,
    getFileStats,
    getBirthTime,
    createNewSafeDirectory,
};
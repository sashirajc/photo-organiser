const fs = require('fs');
const path = require('path');
const { getYear, getMonth, getWeek } = require('../../util/dateHelpers');
const { getBirthTime, getFileStats, createNewDir, moveFile, createNewSafeDirectory } = require('../../util/fileOperations');

const currentWorkingDirectory = process.cwd();

module.exports = async () => {
    console.log('Going to organise all photos inside this folder: ', currentWorkingDirectory);
    const listOfContents = await fs.readdirSync(currentWorkingDirectory);

    console.log(`Found ${listOfContents.length} files inside the current folder`);
    const safeDir = createNewSafeDirectory();

    for (const file of listOfContents) {
        const birthTime = getBirthTime(getFileStats(file));
        
        const fileDetails = {};
        fileDetails.birthTime = birthTime;
        fileDetails.year = getYear(birthTime);
        fileDetails.month = getMonth(birthTime);
        fileDetails.week = getWeek(birthTime);
        
        const newDirLocation = path.join(safeDir, fileDetails.year,fileDetails.month,fileDetails.week);
        
        createNewDir(newDirLocation);
        moveFile(file,newDirLocation);
    }
}
const getYear = date => new Date(date).getFullYear().toString();

const getMonth = (date) => {
    const month = new Date(date).getMonth();
    switch(month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        
    }
}

const getWeek = (date) => {
    const dateOfMonth = new Date(date).getDate();
    if (dateOfMonth < 7) {
        return 'Week 1';
    } else if (dateOfMonth > 8 && dateOfMonth < 14) {
        return 'Week 2';
    } else if (dateOfMonth > 15 && dateOfMonth < 21) {
        return 'Week 3';
    } else {
        return 'Week 4';
    }
};

module.exports = {
    getYear, 
    getMonth,
    getWeek,
};
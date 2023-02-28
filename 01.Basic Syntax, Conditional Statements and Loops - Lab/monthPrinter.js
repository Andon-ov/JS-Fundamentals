function solve(month) {
    if (month < 1 || month > 12) {
        console.log('Error!');
        return;
    }
    const months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    };
    console.log(months[month]);
}

solve(1);
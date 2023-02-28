function solve(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;
    switch (typeOfGroup) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                price = 8.45;

            } else if (dayOfWeek === 'Saturday') {
                price = 9.80;

            } else if (dayOfWeek === 'Sunday') {
                price = 10.46;

            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                price = 10.90;

            } else if (dayOfWeek === 'Saturday') {
                price = 15.60;

            } else if (dayOfWeek === 'Sunday') {
                price = 16;

            }
            break;
        case 'Regular':

            if (dayOfWeek === 'Friday') {
                price = 15;

            } else if (dayOfWeek === 'Saturday') {
                price = 20;

            } else if (dayOfWeek === 'Sunday') {
                price = 22.50;

            }

            break;

    }
    let totalPrice = groupOfPeople * price

    if (typeOfGroup === 'Students' && groupOfPeople >= 30) {
        totalPrice = (price * groupOfPeople) * 0.85

    } else if (typeOfGroup === 'Business' && groupOfPeople >= 100) {
        totalPrice = price * (groupOfPeople - 10)

    } else if (typeOfGroup === 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20 ) {
        totalPrice = (price * groupOfPeople) * 0.95

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

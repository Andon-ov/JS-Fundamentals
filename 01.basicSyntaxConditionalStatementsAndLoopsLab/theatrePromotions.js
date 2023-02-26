function theatrePromotions(day, age) {
    let price = 0;
    if (0 > age || age >= 123) {
        console.log('Error!');
        return;
    }

    if (day === 'Weekday') {
        if (age <= 18) {
            price = 12;
        } else if (age > 18 && age <= 64) {
            price = 18;
        } else if (age > 64 && age <= 122) {
            price = 12;
        }
    } else if (day === 'Weekend') {
        if (age <= 18) {
            price = 15;
        } else if (18 < age && age <= 64) {
            price = 20;
        } else if (64 < age && age <= 122) {
            price = 15;
        }
    } else if (day === 'Holiday') {
        if (age <= 18) {
            price = 5;
        } else if (18 < age && age <= 64) {
            price = 12;
        } else if (64 < age && age <= 122) {
            price = 10;
        }
    }
    console.log(`${price}$`);

}

theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', 15);

//Day / Age
// 0 <= age <= 18
// 18 < age <= 64
// 64 < age <= 122
// Weekday
// 12$
// 18$
// 12$
// Weekend
// 15$
// 20$
// 15$
// Holiday
// 5$
// 12$
// 10$
export const check = (filter, tripField) => {
    return tripField.toLowerCase().search(filter.toLowerCase()) !== -1;
};

export const checkDuration = (filter, tripField) => {
    switch (filter) {
        case '0_x_5':
            return tripField < 5;
        case '5_x_10':
            return tripField >= 5 && tripField < 10;
        case '10_x':
            return tripField >= 10;
        default:
            return true;
    }
};

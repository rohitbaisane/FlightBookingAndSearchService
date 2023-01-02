function compareTime(timeString1, timeString2) {
    const departureDateTime = new Date(timeString1);
    const arrivalDateTime = new Date(timeString2);

    if (departureDateTime.getTime() > arrivalDateTime.getTime())
        return false;

    return true;

}

module.exports = {
    compareTime
}
function requiredReading(bookPages, pagesFor1Hour, daysForRead) {
    let hours = bookPages / pagesFor1Hour;
    let hoursPerDay = hours / daysForRead;
    console.log(hoursPerDay);
}
requiredReading(432,
    15 ,
    4     
    )
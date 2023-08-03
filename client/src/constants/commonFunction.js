export const formatDate = (inputDate) => {
    if(inputDate === undefined) return;
    // Split the input date string into year, month, and day parts
    const [year, month, day] = inputDate.split('-');

    // Create a new Date object using the parsed year, month (subtracting 1 as months are 0-indexed), and day
    const parsedDate = new Date(year, month - 1, day);

    // Define an array of month names
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Get the day, month name, and abbreviated month name from the parsed date
    const formattedDay = parsedDate.getDate();
    const formattedMonthName =  monthNames[parsedDate.getMonth()]; // Using 0-indexed month
    const formattedAbbrevMonthName = formattedMonthName.slice(0, 3); // Abbreviated month name

    // Create the formatted date string in "dd-mmm" format
    const formattedDateString = `${formattedDay}-${formattedAbbrevMonthName}`;

    return formattedDateString;
}
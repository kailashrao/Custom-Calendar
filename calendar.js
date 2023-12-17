 let year1 = 2024
 generateCalendar(year1)

 function generateCalendar(year) {
    let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    isLeapYear(year1) ? daysInMonth[1] = 29 : daysInMonth[1] = 28;
    
    for(let k = 0; k < allMonths.length; k++) {

        let monthTable = "<caption>" + allMonths[k] + " " + year1 + "</caption>";

        let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for(let i = 0; i < daysOfWeek.length; i++) {
            monthTable += "<th>" + daysOfWeek[i] + "</th>";
        }

        let rows = 6;
        let columns = 7;

        let startDate = getFirstSunday(year1, allMonths[k]).getDate();
        let displayNum = startDate;
        let isPrevMonth = false;
        let endOfMonth = false;

        for(let j = 0; j < rows; j++) {
            monthTable += "<tr>";

            let prevMonth;
            k == 0 ? prevMonth = 11 : prevMonth = k-1; 

            for(let i = 0; i < columns; i++) {
                if(j == 0 && displayNum > 7)
                    isPrevMonth = true;
                else
                    isPrevMonth = false;

                if( j == 0 && displayNum > daysInMonth[prevMonth]) {
                    displayNum -= daysInMonth[prevMonth];
                    isPrevMonth = false;
                }

                if(j >= 4  && displayNum > daysInMonth[k]) {
                    displayNum -= daysInMonth[k];
                    endOfMonth = true;
                    break; 
                }

                if(isPrevMonth)
                    monthTable += "<td>" + " " + "</td>";
                else
                    monthTable += "<td>" + displayNum + "</td>";

                displayNum++;
            }

            monthTable += "</tr>";

            if(endOfMonth)
                break;
        }

        document.getElementById(allMonths[k]).innerHTML = monthTable;
    }
}

function isLeapYear(year) {
    let leap = false;
    if (year % 4 == 0 && year % 100 != 0)
        leap = true;
    else if (year % 100 == 0 && year % 400 == 0)
        leap = true;

    return leap;
}

 function getFirstSunday(year, month) {
    let firstOfMonth = new Date("01-" + month + "-" + year);
    let sundayOffset = firstOfMonth.getDay();

    let ms = firstOfMonth.getTime() - (sundayOffset*86400000);
    let firstSunday = new Date(ms);
    return firstSunday;
    
}

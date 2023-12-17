 let year1 = 2024
 
 let months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

 year1%4 == 0 ? daysInMonth[1] = 29 : daysInMonth[1] = 28;
 
 for(let k = 0; k < months1.length; k++) {

    let table1 = "";
    table1 += "<caption>" + months1[k] + " " + year1 + "</caption>";

    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for(let day in daysOfWeek) {
        table1 += "<th>" + daysOfWeek[day] + "</th>";
    }

    let rows1 = 6;
    let columns1 = 7;

    let startDate = getFirstSunday(year1, months1[k]).getDate();
    let isPrevMonth = false;
    let displayNum = startDate;
    let endOfMonth = false;

    for(let j = 0; j < rows1; j++) {
        table1 += "<tr>";
        let prevMonth;
        k == 0 ? prevMonth = 11 : prevMonth = k-1; 

        for(let i = 0; i < columns1; i++) {
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
                table1 += "<td>" + " " + "</td>";
            else
                table1 += "<td>" + displayNum + "</td>";

            displayNum++;
        }

        table1 += "</tr>";

        if(endOfMonth)
            break;
    }

    document.getElementById(months1[k]).innerHTML = table1;
 }

 function getFirstSunday(year, month) {
    let date1 = new Date("01-" + month + "-" + year);
    let day1 = date1.getDay();

    let ms = date1.getTime() - (day1*86400000);
    let date2 = new Date(ms);
    return date2;
    
}

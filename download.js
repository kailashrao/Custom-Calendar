let allMonthsShort = [];
for(let i = 0; i < 12; i++){
    allMonthsShort.push(new Date(0,i).toLocaleDateString("en-US", {month: "short"}));
} 

displayCalendar(year, weeklyHoliday);

function displayCalendar(year, weeklyHoliday="sun") {
    for(let i = 0; i < allMonthsShort.length; i++) {
        generateCalendar(year, i, weeklyHoliday, allMonthsShort[i]);
    }
}

function downloadPDF() {
    html2pdf().set({
        filename: year + "calendar.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        margin: [50,0,0,0], 
        html2canvas: {scale:3},
        jsPDF:{orientation: "landscape"}
    }).from(document.getElementById("pdfContent")).save();
}
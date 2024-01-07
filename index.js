
document.getElementById("yearForm").addEventListener("submit", storeYear);

function storeYear(eventObj) {
    eventObj.preventDefault();
    let year = document.getElementById("year-input");
    year = Number(year.value);
    if(isNaN(year))
        document.getElementById("msg").innerHTML = "Please Enter Valid Year!";
    else {
        document.getElementById("msg").innerHTML = "Success";
        sessionStorage.setItem("year", year.toString());
        sessionStorage.setItem("month", "0");
        window.location.href = "./months.html";
    }
}

function storeHoliday() {
    let weeklyHoliday = document.getElementById("holiday-input").value;
    sessionStorage.setItem("weeklyHoliday", weeklyHoliday);
}

function showHoliday() {
    document.getElementById("holidayContainer").style.display = "block";
    document.getElementById("holidayLink").style.display = "none";
}
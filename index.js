let yearForm = document.getElementById("yearForm");

function getYear(eventObj) {
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
yearForm.addEventListener("submit", getYear);
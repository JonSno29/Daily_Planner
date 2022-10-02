/* variables section */
var todaysDate = moment().format("LLLL");
var tasks = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

var currentHour = new Date().getHours();

/* read current date and display at the top of the calendar */
$("#currentDay").text(todaysDate);

/* functions section */
/* past, present, future color function */
function timeBlockColor() {
  if (currentHour > 8) {
    $("#8am").addClass("past");
  } else if (currentHour >= 8 && currentHour < 9) {
    $("#8am").addClass("present");
  } else if (currentHour < 8) {
    $("#8am").addClass("future");
  }
}

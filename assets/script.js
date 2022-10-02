/* variables section */
var todaysDate = moment().format("LLLL");
var tasks = [
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
  if (currentHour > 9) {
    $("#9am").addClass("past");
  } else if (currentHour >= 9 && currentHour < 9) {
    $("#9am").addClass("present");
  } else if (currentHour < 9) {
    $("#9am").addClass("future");
  }

if (currentHour > 10) {
  $("#10am").addClass("past");
} else if (currentHour >= 10 && currentHour < 10) {
  $("#10am").addClass("present");
} else if (currentHour < 10) {
  $("#10am").addClass("future");
}

if (currentHour > 11) {
  $("#11am").addClass("past");
} else if (currentHour >= 11 && currentHour < 12) {
  $("#11am").addClass("present");
} else if (currentHour < 11) {
  $("#11am").addClass("future");
}

if (currentHour > 12) {
  $("#12pm").addClass("past");
} else if (currentHour >= 12 && currentHour < 1) {
  $("#12pm").addClass("present");
} else if (currentHour < 12) {
  $("#12pm").addClass("future");
}

if (currentHour > 13) {
  $("#1pm").addClass("past");
} else if (currentHour >= 13 && currentHour < 14) {
  $("#1pm").addClass("present");
} else if (currentHour < 13) {
  $("#1pm").addClass("future");
}

if (currentHour > 14) {
  $("#2pm").addClass("past");
} else if (currentHour >= 14 && currentHour < 15) {
  $("#2pm").addClass("present");
} else if (currentHour < 14) {
  $("#2pm").addClass("future");
}

if (currentHour > 15) {
  $("#3pm").addClass("past");
} else if (currentHour >= 15 && currentHour < 16) {
  $("#3pm").addClass("present");
} else if (currentHour < 15) {
  $("#3pm").addClass("future");
}

if (currentHour > 16) {
  $("#4pm").addClass("past");
} else if (currentHour >= 16 && currentHour < 17) {
  $("#4pm").addClass("present");
} else if (currentHour < 16) {
  $("#4pm").addClass("future");
}

  if (currentHour > 17) {
    $("#5pm").addClass("past");
  } else if (currentHour >= 17 && currentHour < 18) {
  $("#5pm").addClass("present");
  } else if (currentHour < 17) {
  $("#5pm").addClass("future");
  }
}
timeBlockColor();

/* Tasks save through reload */
$(".btn9").on("click", function () {
  var localStor = $("#9am").val();
  localStorage.setItem("9:00", localStor);
});

$(".btn10").on("click", function () {
  var localStor = $("#10am").val();
  localStorage.setItem("10:00", localStor);
});

$(".btn11").on("click", function () {
  var localStor = $("#11am").val();
  localStorage.setItem("11:00", localStor);
});

$(".btn12").on("click", function () {
  var localStor = $("#12pm").val();
  localStorage.setItem("12:00", localStor);
});

$(".btn1").on("click", function () {
  var localStor = $("#1pm").val();
  localStorage.setItem("1:00", localStor);
});

$(".btn2").on("click", function () {
  var localStor = $("#2pm").val();
  localStorage.setItem("2:00", localStor);
});

$(".btn3").on("click", function () {
  var localStor = $("#3pm").val();
  localStorage.setItem("3:00", localStor);
});

$(".btn4").on("click", function () {
  var localStor = $("#4pm").val();
  localStorage.setItem("4:00", localStor);
});

$(".btn5").on("click", function () {
  var localStor = $("#5pm").val();
  localStorage.setItem("5:00", localStor);
});


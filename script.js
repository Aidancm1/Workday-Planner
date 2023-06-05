// important DOM elements
var currentTimeEl = $("#current-time");
// var timeBlockElements = document.querySelectorAll(".time-block");
// var $timeBlockElements = 
function handleSave() {
  var val=$(this).siblings(".description").val()
  var hour=$(this).parent().attr("id")
  console.log(val)
  console.log(hour)
  localStorage.setItem(hour , val)
}

$(".saveBtn").on("click", handleSave )

$(".time-block").each(function () {
  // console.log(this)
  var $thisTimeBlock = $(this);
  var timeBlockId = $thisTimeBlock.attr("id");
  // console.log($thisTimeBlock.attr("id"))
  // console.log(timeBlockId.split("-"))
  var hourOfTimeBlock = timeBlockId.split("-")[1];
  console.log(hourOfTimeBlock);
  // dayjs().isBefore(dayjs().hour(hourOfTimeBlock))
  if (dayjs().isAfter(dayjs().hour(hourOfTimeBlock))) {
    console.log(hourOfTimeBlock, "is in the past");
    $thisTimeBlock.addClass("past");
  }
  else if (dayjs().isBefore(dayjs().hour(hourOfTimeBlock))) {
    console.log(hourOfTimeBlock, "is in the future");
    $thisTimeBlock.addClass("future");
  }
   else {
    console.log(hourOfTimeBlock, "Is right now");
  $thisTimeBlock.addClass("present");
  }
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// function to format the timer
function displayTime() {
  var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  currentTimeEl.text(rightNow);
}

function timeSlots() {}

// displays timer at the top of the page
displayTime();
setInterval(displayTime, 1000);

// console.log(localStorage.getItem("hour-9"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
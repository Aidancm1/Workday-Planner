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
    $thisTimeBlock.addclass("present");
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

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
// displays timer at the top of the page
displayTime();
setInterval(displayTime, 1000);

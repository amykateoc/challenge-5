// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.✅
$(document).ready (function() {
var today = dayjs()
var showToday = document.getElementById("currentDay");


showToday.textContent = today;

function colors() {
  var now = dayjs().hour();
  $(".time-block").each(function() {
    var calendarHour = parseInt($(this).attr("id"));
    if (calendarHour < now) {
      $(this).addClass("past");
    }
    else if (calendarHour === now) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("future");
    }
  })
};

colors();

  $(".saveBtn").on("click", function() {
    var textvalue = $(this).siblings(".description").val();
    var timekey = $(this).parent().attr("id");
    localStorage.setItem(timekey, textvalue);
  });

  $("#9 .description").val(
    localStorage.getItem("9")
  );

  $("#10 .description").val(
    localStorage.getItem("10")
  );
  
  $("#11 .description").val(
    localStorage.getItem("11")
  );

  $("#12 .description").val(
    localStorage.getItem("12")
  );

  $("#13 .description").val(
    localStorage.getItem("13")
  );

  $("#14 .description").val(
    localStorage.getItem("14")
  );

  $("#15 .description").val(
    localStorage.getItem("15")
  );

  $("#16 .description").val(
    localStorage.getItem("16")
  );

  $("#17 .description").val(
    localStorage.getItem("17")
  );

});
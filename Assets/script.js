
$(function () {
  //  Selectors for hours 9-5


// Using utiliizing JS 
  var currentHour = dayjs().hour();

  var today = dayjs();

  // making the on-click call back function 
$(".saveBtn").on("click",function(){
  var time = $(this).parent().attr("id")
  var value = $(this).siblings(".description").val()
  localStorage.setItem(time,value)
})
  // retrieves and then sets text content from local storage
  function load() {
    for (i = 9; i < 18; i++) {
      var getFromStorage = i;
      saved = localStorage.getItem("hour-" + getFromStorage);
      if (saved !== null) {
        $("#hour-"+getFromStorage+" .description").val(saved)
      }
    }
  };
  // adds classes to hour boxes based on current time which in turn sets styling
  // progratically adding the time colors
  function setTime() {
    $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id").split("-")[1])
      if (blockHour > currentHour) {
        $(this).addClass('future');
      }
      else if (blockHour === currentHour) {
        $(this).addClass('present');
      }
      else {
        $(this).addClass('past');
      }
  }
  )}
  // box styling on page load
  setTime();

  // set the date at the top of the page 
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));

  // load the data that was saved in the local storage.
  load();

  // adds event listener to the save buttons on click

});

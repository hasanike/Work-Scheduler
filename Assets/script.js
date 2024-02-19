
$(function () {
  //  Selectors for hours 9-5


// Using utiliizing JS 
  var currentHour = dayjs().hour();
  var hourIndex = currentHour - 9;
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
  // 
  // function setTime() {
  //   for (i = 0; i < hours.length; i++) {
  //     if (i > hourIndxex) {
  //       hours[i].addClass('future');
  //     }
  //     if (i === hourIndxex) {
  //       hours[i].addClass('present');
  //     }
  //     if (i < hourIndxex) {
  //       hours[i].addClass('past');
  //     }
  //   }
  // };

  // box styling on page load
  // setTime();

  // set the date at the top of the page 
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));

  // load the data that was saved in the local storage.
  load();

  // adds event listener to the save buttons on click

});

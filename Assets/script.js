
$(function () {
  // Save the button
  var SaveButton = $(saveBtn);
  //  Selectors for hours 9-5
  var hours= [$(hour-9), $(hour-10), $(hour-11), $(hour-12), $(hour-13), $(hour-14), $(hour-15), $(hour-16), $(hour-17)]
  // Saved data from local storage
  var saved;

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

}


  // retrieves and then sets text content from local storage
  function load() {
    for (i = 0; i < hours.length; i++) {
      var getFromStorage = i + 9;
      saved = localStorage.getItem("hour-" + getFromStorage);
      if (saved !== null) {
        hours[i].children().eq(1).text(JSON.parse(saved));
      }
    }
  };
  // adds classes to hour boxes based on current time which in turn sets styling
  function setTime() {
    for (i = 0; i < hours.length; i++) {
      if (i > hourIndxex) {
        hours[i].addClass('future');
      }
      if (i === hourIndxex) {
        hours[i].addClass('present');
      }
      if (i < hourIndxex) {
        hours[i].addClass('past');
      }
    }
  };

  // box styling on page load
  setTime();

  // set the date at the top of the page 
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));

  // load the data that was saved in the local storage.
  load();

  // adds event listener to the save buttons on click
  saveButton.on("click", save);

});



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

// When button clicked using Dom transveral calls data from local storage
  function save(event) {
    var btnClicked = $(event.target);
    localStorage.setItem(btnClicked.parent().attr("id"), JSON.stringify(btnClicked.parent().children().eq(1).val().trim()));
  };

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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  // use the id in the containing time-block as a key to save the user input in

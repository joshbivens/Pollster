var num = 2, poll;

// Firebase
var ref = new Firebase("https://pollsterapp.firebaseio.com/");

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  poll = snapshot.val();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Add Option
$("#add").on("click", function() {
  num += 1;
  var option = $("<input type='text' class='option' name='opt_" + num + "' >");
  $("#options").append(option);
});

// Create values object
function createValuesObject() {
  var values = {title: $("#title").val()};
  var options = $(".option");

  for(var i = 0, x = options.length; i < x; i++) {
    var current = options[i];
    values[current.name] = {value: current.value, count: 0};
  }
  //console.log(values);
  return values;
}

// Create Poll
function createPoll() {
  var values = createValuesObject();
  ref.set(values);
  // values are now in 'poll'
  $("#title-area").text(poll.title);

  for( key in poll ) {
    var option = poll[key];
    var $radio = $("<input type='radio' name='option' id='" + key + "' >");
    var $div = $("<div></div>");
    if(key !== "title") {
      $("#radio-list").append($div);
      $div.append($radio);
      $radio.after("<label for='" + key + "'>" + option.value + "</label>");
    }
  }
}

// Show poll
$("#create").on("click", function(e) {
  e.preventDefault();
  createPoll();

  $("#create-panel").css("display", "none");
  $("#loader").css("display", "block");
  window.setTimeout(function() {
    $("#loader").css("display", "none");
    $("#radio-panel").css("display", "block");
  }, 1000);

});

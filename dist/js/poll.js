// ---------------------------------------------
// Add options
// ---------------------------------------------
var num = 2;

$("#add").on("click", function() {
  num += 1;

  var newOption = $("<input type='text' class='option'>");
  newOption.attr("name", "opt_" + num);

  $("#options").append(newOption);
});


// ---------------------------------------------
// Create Poll
// ---------------------------------------------
$("input[type='submit']").on("click", function(e) {
  e.preventDefault();

  var title = $("#title").val();
  var values = {title: title};

  $('.option').each(function() {
    values[this.name] = this.value;
  });

  console.log(values);

  // Still need to hide this and show the Radio Panel

  return values;
});


var create = document.getElementById("create");
var add = document.getElementById("add");
var num = 2;

// ---------------------------------------------
// Add options
// ---------------------------------------------

function addOption() {
  var newOption = document.createElement("input");
  var optionsList = document.getElementById("options");

  num += 1;
  newOption.className = "option";
  newOption.setAttribute("type", "text");
  newOption.setAttribute("name", "opt_" + num);
  optionsList.appendChild(newOption);
}

// ---------------------------------------------
// Create Poll
// ---------------------------------------------

function createPoll(e) {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var options = document.getElementsByClassName("option");
  var values = {title: title};

  for(var i = 0, x = options.length; i < x; i++) {
    var current = options[i];
    values[current.name] = current.value;
  }

  console.log(values);
  return values;
}

// ---------------------------------------------
// Event Listeners
// ---------------------------------------------

add.addEventListener("click", addOption);
create.addEventListener("click", createPoll);
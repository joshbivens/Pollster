
var create = document.getElementById("create");
var add = document.getElementById("add");
var vote = document.getElementById("vote");
var num = 2;
var poll;

// ---------------------------------------------
// Firebase
// ---------------------------------------------

var ref = new Firebase("https://pollsterapp.firebaseio.com/");
//var pollRef = ref.child("polls");

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  poll = snapshot.val();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

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
// Get Poll Info
// ---------------------------------------------

function getPollInfo(e) {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var options = document.getElementsByClassName("option");
  var createPanel = document.getElementById("create-panel");
  var radioPanel = document.getElementById("radio-panel");
  var loader = document.getElementById("loader");
  var values = {title: title};

  for(var i = 0, x = options.length; i < x; i++) {
    var current = options[i];
    values[current.name] = {value: current.value, count: 0};
  }

  createPanel.style.display = "none";
  loader.style.display = "block";
  window.setTimeout(function() {
    radioPanel.style.display = "block";
    loader.style.display = "none";
  }, 1500);

  console.log(values);
  ref.set(values);
  createPoll();
}

// ---------------------------------------------
// Create Poll
// ---------------------------------------------

function createPoll() {
  var radioPanel = document.getElementById("radio-panel");
  var radioList = document.getElementById("radio-list");
  var radioContent = document.getElementById("radio-content");
  var titleArea = document.getElementById("title-area");
  var title = poll.title;

  titleArea.textContent = title;

  for(key in poll) {
    if(key !== "title") {
      var option = poll[key];
      console.log(option.value);
      // Create radio
      // key for "opt_1" etc, poll[key] for its value
      var radio = document.createElement("input");
      radio.className = "radio";
      radio.setAttribute("type", "radio");
      radio.setAttribute("value", key);
      radio.setAttribute("name", "option");
      var p = document.createElement("p");
      var t = document.createTextNode(option.value);
      p.appendChild(t);
      radioList.appendChild(radio);
      radioList.appendChild(p);
    }
  }
}

// ---------------------------------------------
// Vote
// ---------------------------------------------

function voteOnOption(e) {
  e.preventDefault();
  // Find radio that's checked and increment its count by 1
  var radios = document.getElementsByClassName("radio");

  console.log(poll);

  for(key in poll) {
    console.log(poll[key].count);
    var option = poll[key];
    for(var i = 0, x = radios.length; i < x; i++) {
      if (radios[i].checked) {
        radios[i].count += 1;
        console.log(radios[i].count);
      }
    }
  }

}

// ---------------------------------------------
// Event Listeners
// ---------------------------------------------

add.addEventListener("click", addOption);
create.addEventListener("click", getPollInfo);
vote.addEventListener("click", voteOnOption);

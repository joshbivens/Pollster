function PollCreator(title) {
  this.title = title;
}

PollCreator.prototype.setTitle = function(title) {
  this.title = title
}

// PollCreator.prototype.setOptions = function(option) {
//
// }

module.exports = PollCreator;

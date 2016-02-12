
describe("PollCreator", function() {
  var PollCreator = require('../../lib/jasmine_examples/Poll');
  var poll;

  beforeEach(function() {
    poll = new PollCreator();
  });

  it("should exist", function() {
    expect(poll).toBeDefined();
  });

  it("should set it's title", function () {
    poll.setTitle("Hello, world!");
    expect(poll.title).toBe("Hello, world!")
  });
});

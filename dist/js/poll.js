new Vue({
  el: "#app",
  data: {
    poll: {
      title: "What's the best way to spend your time?",
      options: [
        { id: "opt_1", text: 'Sleep' },
        { id: "opt_2", text: 'Develop' }
      ]
    }
  },
  methods: {
    addOption: function() {
      var options = document.getElementById("options");
      var newOption = document.createElement("input");
      newOption.setAttribute("type", "text");
      newOption.setAttribute("v-model", "options.text");
      options.appendChild(newOption);
    }
  }
})

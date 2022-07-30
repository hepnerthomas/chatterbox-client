// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // Get user's text data from the event
    var $formData = FormView.$form.serializeArray();
    var $formMessage = $formData[0]['value'];

    // Construct the message to send to server
    var currentRoomName = $('#rooms option:selected').text();
    var messageToSubmit = {
      username: App.username,
      text: $formMessage,
      roomname: currentRoomName
    };

    // Send the message to the server
    Parse.create(messageToSubmit, function() {
      console.log('chatterbox: SUCCESS - message sent to server.');
    });

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
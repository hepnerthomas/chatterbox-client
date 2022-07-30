// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render _all_ the messages.

    // Get the messages
    let messages = Messages._data;

    // // For each message in the messages array
    for (message of messages) {

      // render the message
      if (arguments[0] === undefined || message.roomname === arguments[0]) {
        MessagesView.renderMessage(message);
      }

    }


  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    // render the input message and convert to jQuery variable
    let $renderedMessage = $(MessageView.render(message));

    // append the input message to chats html element in DOM
    $renderedMessage.appendTo(MessagesView.$chats);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
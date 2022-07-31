// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // $('#chats').find('.username').on('click', MessageView.handleClick);
    $("#chats").on("click", ".username", MessagesView.handleClick);

  },

  render: function() {
    // TODO: Render _all_ the messages.

    // Get the messages
    let messages = Messages._data;

    // // For each message in the messages array
    for (message of messages) {
       // render the message
      if (arguments[0] === undefined || message.roomname === arguments[0]) {
        console.log(arguments[0]);
        MessagesView.renderMessage(message);
      }

    }


  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    // render the input message and convert to jQuery variable
    let $renderedMessage = $(MessageView.render(message));

    // console.log($renderedMessage);
    // if the username is in friends, highlight the username
    // if (Friends._data.has(message.username)) {
      // console.log($renderedMessage('.username'));
      // consol
      // console.log($renderedMessag.children[0]);
      // $renderedMessage[0].children[0].replaceWith('<div class="username"><mark><%- username %></mark></div>');
      // $renderedMessage('.username').html('<div class="username"><mark><%- username %></mark></div>');
    // }

    // append the input message to chats html element in DOM
    $renderedMessage.appendTo(MessagesView.$chats);

  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    // prevent default
    event.preventDefault();

    // console.log(event);

    // get the user input for the new room name
    var friendName = event.currentTarget.innerText;
    // var friendName = event.serializeArray()[0]['value'];

    Friends.toggleStatus(friendName);


  }



};
// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="roomname"><%- roomname %></div>
      </div>
    `),

    renderFriendMessage: _.template(`
    <div class="chat">
      <div class="username"><mark><%- username %></mark></div>
      <div class="text"><%- text %></div>
      <div class="roomname"><%- roomname %></div>
    </div>
  `)

};



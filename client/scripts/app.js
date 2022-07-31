// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner());

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(function() {
      App.fetch();
    }, 1000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data[0]);
      // console.log(MessageView.render(data[0]));

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // Store fetched data in our messages object
      Messages._data = data;

      // Display all stored messages for the current room
      var currentRoomName = $('#rooms option:selected').text();
      // console.log(currentRoomName);

      // Highlight all friends names in messages
      var friends = Friends._data;
      // console.log(friends);
      MessagesView.$chats.empty();
      MessagesView.render(currentRoomName); //, friends
      RoomsView.render();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

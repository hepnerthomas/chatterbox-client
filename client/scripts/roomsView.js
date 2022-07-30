// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // Pseudocode:
    // select:
      // call render function to show list of all rooms
      // defaults to "New room..." as there are no rooms
    // button:

  },

  render: function() {
    // TODO: Render out the list of rooms.

    // Pseudocode:
    // get list of rooms
    //
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

    // Functionality: show list of messages for a given roomname
    // Pseudocode:
    //

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    // Pseuodcode:
    // get new roomname from the event
    // renderRoom(roomname): display list of messages for new roomname
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    // Pseudocode:
    // get the roomname from the event
    // rooms.addRoom(roomname): add the roomname to the list of rooms
  }

};

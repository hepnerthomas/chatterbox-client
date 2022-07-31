// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
    // Pseudocode:
    // select:
      // call render function to show list of all rooms
      // defaults to "New room..." as there are no rooms
    // button:

  },

  render: function() {
    // TODO: Render out the list of rooms.

    // Pseudocode:
    // create an array to store list of roomnames
    let roomnames = Rooms._data;
    // RoomsView.render(roomnames[0]);

    // get the messages array
    let messages = [{'roomname': 'New room...'}].concat(Messages._data);
    // iterate through the messages array
    for (message of messages) {
      // truncate roomname from message and store in variable
      let roomname = String(message.roomname);
      roomname = roomname.substring(0, 13);
      if (!roomnames.includes(roomname)) {
        roomnames.push(roomname);
        if (roomname === 'New room...') {
          RoomsView.renderRoom(roomname, 'selected');
        } else {
          RoomsView.renderRoom(roomname);
        }

      }
    }
    // console.log(roomnames);
    Rooms._data = roomnames;

  },



  renderRoom: function(roomname) {
    // TODO: Render out a single room.

    // Create rendered room
    var $renderedRoom;
    if (arguments[1] !== undefined) {
      $renderedRoom = $(`<option ${arguments[1]}>${roomname}</option>`)
    } else {
      $renderedRoom = $(`<option>${roomname}</option>`)
    }

    // Append rendered room to the DOM
    $renderedRoom.appendTo(RoomsView.$select);

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var selectedRoomName = $('#rooms select').find('option:selected').text();
    // console.log(selectedRoomName);
    MessagesView.render(selectedRoomName);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    // prevent default
    event.preventDefault();

    // get the user input for the new room name
    var newRoomName = $('#new-room').serializeArray()[0]['value'];
    // console.log(newRoomName);
    // var newRoomName = event.currentTarget.innerText;

    // console.log(newRoomName);
    // var newRoomName = event.currentTarget.innerText;
    // console.log(event.currentTarget.parentNode);
    // console.log(event.currentTarget.parentNode.children);
    // console.log(event.currentTarget.parentNode.children[1].innerText);
    // console.log(event);
    // var newRoomName = event.currentTarget.parentNode.children[1].innerText;
    // console.log(newRoomName);

    // add the new room to the roomnames
    Rooms.add(newRoomName);
    // console.log(Rooms._data);

    // render the new room
    RoomsView.renderRoom(newRoomName, 'selected');
    console.log('room submission: SUCCESS - room created!');

    // render messages for that room only
    MessagesView.render(newRoomName);

    // hide the Add Room button and text input
    // $('button').hidden = true;
    // $('#create-room').style.visibility = 'hidden';

    // get the roomname from the event
    // rooms.addRoom(roomname): add the roomname to the list of rooms
  }

};

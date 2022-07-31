// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function(friend) {
    Friends._data.add(friend);
  },

  delete: function(friend) {
    Friends._data.delete(friend);
  },

  toggleStatus: function(friend) {
    if (Friends._data.has(friend)) {
      Friends.delete(friend);
    } else {
      Friends.add(friend);
    }
  }

};
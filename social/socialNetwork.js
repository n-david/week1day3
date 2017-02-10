var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

var followsList = function (person) {
  var followsList = [];
  for (var i = 0; i < data[person]['follows'].length; i++) {
    followsList.push(data[person]['follows'][i]);
  }
  return followsList;
}

var followedList = function (person) {
  var followedList = [];
  for (id in data) {
    for (var i = 0; i < data[id]['follows'].length; i++) {
      if (person === data[id]['follows'][i]) {
        followedList.push(id);
      }
    }
  }
  return followedList;
}

var idToName = function (idList) {
  var nameList = [];
  for (var i = 0; i < idList.length; i++) {
    nameList.push(data[idList[i]]['name']);
  }
  return nameList;
}

var listEveryone = function () {
  var peopleList = {};
  for (id in data) {
    peopleList[data[id]['name']] = {follows: idToName(followsList(id)), followed: idToName(followedList(id))};
  }
  console.log(peopleList);
}

var followsMostPeople = function () {
  var stalker;
  var followsMost;
  for (id in data) {
    if (followsList(id).length > followsMost || stalker == null) {
      followsMost = followsList(id).length;
      stalker = data[id]['name'];
    }
  }
  console.log(stalker, 'follows the most people');
}

var hasMostFollowers = function () {
  var popular;
  var followedMost;
  for (id in data) {
    if (followedList(id).length > followedMost || popular == null) {
      followedMost = followedList(id).length;
      popular = data[id]['name'];
    }
  }
  console.log(popular, 'has the most followers');
}

var hasMostFollowersOverThirty = function () {
  var popular;
  var followedMost;
  for (id in data) {
    var followers = followedList(id);
    for (var i = 0; i < followers.length; i++) {
      if (data[followers[i]]['age'] < 30) {
        followers.pop();
      }
    }
    if (followers.length > followedMost || popular == null) {
      followedMost = followers.length;
      popular = data[id]['name'];
    }
  }
  console.log(popular, 'has the most followers that are over 30');
}

hasMostFollowersOverThirty() //DO THIS

var followsMostPeopleOverThirty = function () {}
var followsButNoFollowBack = function () {}
var everyoneAndReach = function () {}


listEveryone();
followsMostPeople(); //Deal with ties
hasMostFollowers(); //Deal with ties
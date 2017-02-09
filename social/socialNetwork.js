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
    followsList.push(data[data[person]['follows'][i]]['name']);
  }
  return followsList;
}

var followedList = function (person) {
  var followedList = [];
  for (id in data) {
    for (var i = 0; i < data[id]['follows'].length; i++) {
      if (person === data[id]['follows'][i]) {
        followedList.push(data[id]['name']);
      }
    }
  }
  return followedList;
}

var listEveryone = function () {
  var peopleList = {};
  for (id in data) {
    peopleList[data[id]['name']] = {follows: followsList(id), followed: followedList(id)};
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
  console.log(popular, 'Has the most followers');
}
var hasMostFollowersOverThirty = function () {}
var followsMostPeopleOverThirty = function () {}
var followsButNoFollowBack = function () {}
var everyoneAndReach = function () {}

listEveryone();
followsMostPeople(); //Deal with ties
hasMostFollowers(); //Deal with ties
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
};

var followedList = function (person) {
  var followedList = [];
  for (var id in data) {
    for (var i = 0; i < data[id]['follows'].length; i++) {
      if (person === data[id]['follows'][i]) {
        followedList.push(id);
      }
    }
  }
  return followedList;
};

var idToName = function (idList) {
  var nameList = [];
  for (var i = 0; i < idList.length; i++) {
    nameList.push(data[idList[i]]['name']);
  }
  return nameList;
};

var listEveryone = function () {
  var peopleList = {};
  for (var id in data) {
    peopleList[data[id]['name']] = {follows: idToName(followsList(id)), followed: idToName(followedList(id))};
  }
  console.log(peopleList);
};

var followsMostPeople = function () {
  var stalker = null;
  var followsMost;
  for (var id in data) {
    if (followsList(id).length > followsMost || stalker === null) {
      followsMost = followsList(id).length;
      stalker = data[id]['name'];
    }
  }
  console.log(stalker, 'follows the most people');
};

var hasMostFollowers = function () {
  var popular = null;
  var followedMost;
  for (var id in data) {
    if (followedList(id).length > followedMost || popular === null) {
      followedMost = followedList(id).length;
      popular = data[id]['name'];
    }
  }
  console.log(popular, 'has the most followers');
};

var hasMostFollowersOverThirty = function () {
  var popular = null;
  var followedMost;
  for (var id in data) {
    var followers = followedList(id);
    for (var i = 0; i < followers.length; i++) {
      if (data[followers[i]]['age'] < 30) {
        followers.splice(i, 1);
      }
    }
    if (followers.length > followedMost || popular === null) {
      followedMost = followers.length;
      popular = data[id]['name'];
    }
  }
  console.log(popular, 'has the most followers that are over 30');
};

var followsMostPeopleOverThirty = function () {
  var stalker = null;
  var followsMost;
  for (var id in data) {
    var follows = followsList(id);
    for (var i = 0; i < follows.length; i++) {
      if (data[follows[i]]['age'] < 30) {
        follows.splice(i, 1);
      }
    }
    if (follows.length > followsMost || stalker === null) {
      followsMost = follows.length;
      stalker = data[id]['name'];
    }
  }
  console.log(stalker, 'follows the most people that are over 30');
};

var followsButNoFollowBack = function () {
  var noLove = [];
  for (var id in data) {
    var follows = followsList(id);
    var followed = followedList(id);
    for (var i = 0; i < follows.length; i++) {
      // console.log(follows[i]);
      // console.log(followed);
      // console.log(follows[i] in followed === false);
      if (!(followed.includes(follows[i]))) {
        if (!(noLove.includes(data[id]['name']))) {
          noLove.push(data[id]['name']);
        }
      }
    }
  }
  console.log('No follow back:', noLove);
};

var everyoneAndReach = function () {
  var reachAll = {};
  for (var id1 in data) {
    var reach = 0;
    reach += followedList(id1).length;
    reachAll[data[id1]['name']] = reach;
  }
  var reachAllEveryone = {};
  for (var id2 in data) {
    reachAllEveryone[data[id2]['name']] = 0;
    for (f of idToName(followedList(id2))) {
      reachAllEveryone[data[id2]['name']] += reachAll[f];
    }
    reachAllEveryone[data[id2]['name']] += reachAll[data[id2]['name']];
  }
  console.log('Reach:', reachAllEveryone);
};

listEveryone();
followsMostPeople();
hasMostFollowers();
hasMostFollowersOverThirty();
followsMostPeopleOverThirty();
followsButNoFollowBack();
everyoneAndReach();

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

// ################################################################
// more example using callbacks
// ################################################################

const userLeft = true;
const userWatchCatMeme = false;

// const watchTutorialCallback = (callback, errorCallback) => {
//   if (userLeft) {
//     errorCallback({ name: "User Left", message: ":(" });
//   } else if (userWatchCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "Testing Cat vids",
//     });
//   } else {
//     callback("Thumbs up and subscribe");
//   }
// };

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// ################################################################
// using promises
// ################################################################

// replace errorCallback with reject and callback with resolve

const watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({ name: "User Left", message: ":(" });
    } else if (userWatchCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "Testing Cat vids",
      });
    } else {
      resolve("Thumbs up and subscribe");
    }
  });
};

watchTutorialPromise()
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

//Promise.all and Promise.race
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

//Promise.all will return all the values
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

//Promise.race will return as soon as teh first one is completed instead of waiting for everything to be completed.
Promise.race([recordVideoTwo, recordVideoOne, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

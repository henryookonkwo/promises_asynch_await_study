const makeRequest = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making Requests to ${location}`);
    if (location === "Google") {
      resolve("Google says helloooo");
    } else {
      reject("We can only talk to Google");
    }
  });
};

const processRequest = (response) => {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information ${response}`);
  });
};

// ################################################################
// using promises
// ################################################################

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Receieved");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   });

// ################################################################
//   using async await
// ################################################################

const doWork = async () => {
  try {
    const response = await makeRequest("Google");
    console.log("Response Receieved");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
};

doWork();

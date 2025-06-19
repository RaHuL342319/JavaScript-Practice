const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server: ${msg}`);
      }
      reject(`error from server: ${msg}`);
    }, 3000);
  });
};

const callFakeFetch = async () => {
  try {
    const response = await fakeFetch("Hi", true);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

callFakeFetch();

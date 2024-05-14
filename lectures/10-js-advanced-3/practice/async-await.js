function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Data fetched!")
        : reject("Error fetching data");
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
  
async function fetchDataWithAsyncAwait() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataWithAsyncAwait();

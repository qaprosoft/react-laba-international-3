const sleep = (timeout = 5000) =>
  new Promise(resolve => setTimeout(resolve, timeout));

export {sleep};

const api = async ({url, method = 'GET', body, headers = {}}) => {
  const req = await fetch(url, {method, body, headers});
  const res = await req.json();
  if (!req.ok) {
    throw new Error(res.error);
  }
  return res;
};

export {api};

const getOrders = async (page = 0) => {
	const req = await fetch(`api/orders?page=${page}`);
	const res = await req.json();

	return res;
};

export { getOrders };

import { createContext, useContext, useState } from 'react';

const ordersContext = createContext();

const useOrdersContext = () => useContext(ordersContext);

const useOrdersProvider = () => {
	const [page, setPage] = useState(0);
	const [orders, setOrders] = useState([]);
	const [selectedOrders, setSelectedOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchOrders = async (page) => {
		try {
			const req = await fetch(`api/orders?page=${page}`);
			if (!req.ok) {
				throw new Error('Smth Went Wrong');
			}

			const res = await req.json();

			return res;
		} catch (e) {
			alert(e.message);
		}
	};

	const loadOrders = async () => {
		setIsLoading(() => true);

		const newOrders = await fetchOrders(page);
		if (newOrders) {
			setPage((curr) => curr + 1);
			setOrders((currOrders) => [...currOrders, ...newOrders]);
		}

		setIsLoading(() => false);
	};

	const selectOrder = (id) => {
		const isOrderSelected = selectedOrders.find((item) => item.id === id);

		if (!isOrderSelected) {
			const selectedOrder = orders.find((item) => item.id === id);

			if (selectedOrder) {
				setSelectedOrders((prevOrders) => [...prevOrders, selectedOrder]);
			}
		}
	};

	const deleteSelectedOrder = (id) => {
		const orderIndex = selectedOrders.findIndex((item) => item.id === id);

		if (orderIndex !== -1) {
			const ordersCopy = [...selectedOrders];
			ordersCopy.splice(orderIndex, 1);
			setSelectedOrders(() => ordersCopy);
		}
	};

	return {
		orders,
		selectedOrders,
		loadOrders,
		isLoading,
		selectOrder,
		deleteSelectedOrder,
	};
};

const OrdersProvider = ({ children }) => {
	const orders = useOrdersProvider();

	return (
		<ordersContext.Provider value={orders}>{children}</ordersContext.Provider>
	);
};

export { ordersContext, useOrdersProvider, useOrdersContext };
export default OrdersProvider;

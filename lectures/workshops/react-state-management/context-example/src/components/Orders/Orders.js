import { ordersContext, useOrdersContext } from '@/store/orders';
import { Box, Button, Container, Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import OrderItem from './components/OrderItem';

const headers = [
	{ title: 'Id', width: 1 },
	{ title: 'Date', width: 1.8 },
	{ title: 'Name', width: 1.8 },
	{ title: 'Ship To', width: 1.8 },
	{ title: 'Payment Method', width: 1.8 },
	{ title: 'Amout', width: 1.8 },
];

const Orders = () => {
	const {
		orders,
		loadOrders,
		isLoading,
		selectOrder,
		deleteSelectedOrder,
		selectedOrders,
	} = useOrdersContext();

	return (
		<Box>
			<Grid container sx={{ mb: '20px' }}>
				{headers?.map((item, idx) => (
					<Grid item xs={item.width} key={idx}>
						{item.title}
					</Grid>
				))}
			</Grid>

			{isLoading
				? 'Loading'
				: orders?.map((item, idx) => (
						<OrderItem
							isSelected={selectedOrders.find((order) => order.id === item.id)}
							onSelectOrder={selectOrder}
							onDeleteSelectedOrder={deleteSelectedOrder}
							key={item.id}
							{...item}
						/>
				  ))}

			<Button onClick={loadOrders}>Setup Data</Button>
		</Box>
	);
};

export default Orders;

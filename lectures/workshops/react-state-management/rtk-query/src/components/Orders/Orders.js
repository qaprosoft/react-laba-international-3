import { ordersApi, useLazyGetOrdersQuery } from '@/services/orders';
import { addOrder, removeOrder } from '@/store/slices/selectedOrders';
import { Box, Button, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
	const dispatch = useDispatch();
	const selectedOrders = useSelector((state) => state.selectedOrders);
	const [getOrders] = useLazyGetOrdersQuery();
	const useQueryStateResult = ordersApi.endpoints.getOrders.useQueryState();

	const setupDataHandler = () => {
		getOrders(useQueryStateResult?.data?.length / 5 || 0, true);
	};

	return (
		<Box>
			<Grid container sx={{ mb: '20px' }}>
				{headers?.map((item, idx) => (
					<Grid item xs={item.width} key={idx}>
						{item.title}
					</Grid>
				))}
			</Grid>

			{useQueryStateResult.data?.map((item) => (
				<OrderItem
					isSelected={selectedOrders.includes(item.id)}
					key={item.id}
					onAddOrder={() => dispatch(addOrder(item.id))}
					onRemoveOrder={() => dispatch(removeOrder(item.id))}
					{...item}
				/>
			))}

			<Button onClick={setupDataHandler}>Setup Data</Button>
		</Box>
	);
};

export default Orders;

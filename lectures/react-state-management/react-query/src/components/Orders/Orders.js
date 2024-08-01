import {Box, Grid, Button} from '@mui/material';
import OrderItem from './components/OrderItem';
import {useInfiniteQuery, useQuery, QueryClient} from '@tanstack/react-query';
import {getOrders} from '@/services/orders';

const headers = [
  {title: 'Id', width: 1},
  {title: 'Date', width: 1.8},
  {title: 'Name', width: 1.8},
  {title: 'Ship To', width: 1.8},
  {title: 'Payment Method', width: 1.8},
  {title: 'Amout', width: 1.8},
];

const Orders = () => {
  const {data, fetchNextPage} = useInfiniteQuery({
    queryKey: ['projects'],
    enabled: false,
    keepPreviousData: true,
    queryFn: async ({pageParam = 0}) => await getOrders(pageParam),
    getPreviousPageParam: (_, allPages) => {
      return allPages.length - 1 || 0;
    },
    getNextPageParam: (_, allPages) => {
      return allPages.length || 0;
    },
  });

  return (
    <Box>
      <Grid container sx={{mb: '20px'}}>
        {headers?.map((item, idx) => (
          <Grid item xs={item.width} key={idx}>
            {item.title}
          </Grid>
        ))}
      </Grid>

      {data?.pages?.map(page =>
        page.map(item => <OrderItem key={item.id} {...item} />),
      )}

      <Button onClick={fetchNextPage}>Setup Data</Button>
    </Box>
  );
};

export default Orders;

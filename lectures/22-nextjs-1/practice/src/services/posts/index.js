import {sleep} from '@/helpers/misc';
import {api} from '../http';

const getPosts = () =>
  api({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  });

const getLongPostsWithSleep = async (sleepTime = 5000) => {
  await sleep(sleepTime);
  return getPosts(sleepTime);
};

export {getPosts, getLongPostsWithSleep};

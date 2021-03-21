// TODO: get json with blog posts as initial state from external file
import { BlogPosts } from '../../types';

// initial state
const state = {
  posts: [
    {
      slug: 'my-post',
      tag: 'vegan',
      title: 'some-title',
      subTitle: 'some-sub-title',
      img: 'images/beach.jpg',
      date: '2021-03-21',
    },
  ],
} as BlogPosts;

// getters
const getters = {};

export default {
  state,
  getters,
};

import { BlogPost } from './types';

export const posts = new Array<BlogPost>(
  {
    slug: 'save-oceans',
    tag: 'Environmentalism',
    title: 'Seaspiracy',
    subTitle: 'Stop eating fish',
    img: 'beach.jpg',
    date: '2021-03-26',
  },
  {
    slug: 'save-animals',
    tag: 'Veganism',
    title: 'Stop being selfish',
    subTitle: 'You can do more',
    img: 'beach.jpg',
    date: '2021-03-20',
  },
  {
    slug: 'save-us',
    tag: 'Future',
    title: 'Thrive or die',
    subTitle: 'What will happen to us?',
    img: 'beach.jpg',
    date: '2021-02-20',
  }
);

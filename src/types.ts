import { ViteSSGContext } from 'vite-ssg';

export type UserModule = (ctx: ViteSSGContext) => void;
export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  subTitle: string;
  img: string;
  date: string;
};
export interface BlogPosts {
  posts: BlogPost[];
}

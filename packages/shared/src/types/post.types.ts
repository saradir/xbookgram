import { User } from './user.types.js';

export type Post = {
  id: number;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  author: User;
  _count: { likes: number; comments: number; sharedBy: number };
  originalPost: {
    id: number;
    content: string;
    createdAt: string;
    author: User;
  } | null;
};

export type Feed = {
  posts: Post[];
  nextCursor: number | null;
};

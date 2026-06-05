export type User = {
  id: number;
  username: string;
  profilePic: string | null;
};

export type CurrentUser = User & {
  isOnboarded: boolean;
  email: string | null;
  name: string | null;
};

export type UserProfile = User & {
  _count: { following: number; followers: number; posts: number };
  isFollowed: boolean;
  isFollower: boolean;
};

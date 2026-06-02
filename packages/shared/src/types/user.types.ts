export type User = {
  id: number;
  username: string;
  profilePic: string | null;
};

export type CurrentUser = User & {
  isOnboarded: boolean;
  email: string | null;
};

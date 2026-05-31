export type CurrentUser = {
  id: number;
  username: string;
  name: string;
  isOnboarded: boolean;
  profilePic: string | null;
  email: string;
};

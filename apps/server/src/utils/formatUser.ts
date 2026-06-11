export function formtatUser(user: any): any {
  // minimal formatter — adjust fields as needed
  const isFollowed = user.followers.length > 0;
  const isFollower = user.following.length > 0;
  return {
    id: user.id,
    username: user.username,
    profilePic: user.profilePic,
    _count: user._count,
    isFollower,
    isFollowed,
  };
}

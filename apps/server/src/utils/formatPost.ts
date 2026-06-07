export function formatPost(post: any): any {
  // minimal formatter — adjust fields as needed
  const isLiked = (post.likes?.length ?? 0) > 0;
  return {
    id: post.id,
    content: post.content,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    author: post.author,
    isLiked: isLiked,
    _count: post._count,
    originalPost: post.originalPost,
    comments: post.comments ?? [],
  };
}

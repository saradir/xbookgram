export function formatComment(comment: any): any {
  // minimal formatter — adjust fields as needed
  const isLiked = (comment.likes?.length ?? 0) > 0;
  return {
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
    author: comment.author,
    isLiked: isLiked,
    _count: comment._count,
  };
}

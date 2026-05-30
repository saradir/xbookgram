/*
  Warnings:

  - The primary key for the `Follows` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "CommentLikes_userId_commentId_key";

-- DropIndex
DROP INDEX "PostLikes_userId_postId_key";

-- AlterTable
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_pkey",
ADD CONSTRAINT "Follows_pkey" PRIMARY KEY ("followingUserId", "followedUserId");

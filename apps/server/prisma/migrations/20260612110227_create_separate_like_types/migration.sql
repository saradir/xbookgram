/*
  Warnings:

  - The values [LIKE] on the enum `Event` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Event_new" AS ENUM ('POST_LIKE', 'COMMENT_LIKE', 'SHARE', 'FOLLOW', 'COMMENT');
ALTER TABLE "Notification" ALTER COLUMN "type" TYPE "Event_new" USING ("type"::text::"Event_new");
ALTER TYPE "Event" RENAME TO "Event_old";
ALTER TYPE "Event_new" RENAME TO "Event";
DROP TYPE "public"."Event_old";
COMMIT;

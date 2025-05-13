ALTER TABLE "author" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "author" CASCADE;--> statement-breakpoint
ALTER TABLE "post" DROP CONSTRAINT "post_authorId_author_id_fk";
--> statement-breakpoint
ALTER TABLE "post" DROP COLUMN "authorId";
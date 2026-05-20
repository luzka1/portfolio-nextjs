PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_projects` (
	`id` text PRIMARY KEY NOT NULL,
	`img` text NOT NULL,
	`name` text NOT NULL,
	`tiny_description` text NOT NULL,
	`full_description` text NOT NULL,
	`proj_url` text,
	`git_link` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_projects`("id", "img", "name", "tiny_description", "full_description", "proj_url", "git_link", "created_at", "updated_at") SELECT "id", "img", "name", "tiny_description", "full_description", "proj_url", "git_link", "created_at", "updated_at" FROM `projects`;--> statement-breakpoint
DROP TABLE `projects`;--> statement-breakpoint
ALTER TABLE `__new_projects` RENAME TO `projects`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
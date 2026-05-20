CREATE TABLE `projects_technologies` (
	`project_id` text NOT NULL,
	`technology_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `technologies` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`icon` text NOT NULL,
	`created_at` text NOT NULL
);

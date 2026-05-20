CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`img_url` text NOT NULL,
	`name` text NOT NULL,
	`tiny_description` text NOT NULL,
	`full_description` text NOT NULL,
	`proj_url` text NOT NULL,
	`content` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);

CREATE TABLE `quote_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`company` varchar(255),
	`services` json NOT NULL,
	`budget` varchar(50) NOT NULL,
	`timeline` varchar(50) NOT NULL,
	`message` text,
	`status` enum('new','contacted','quoted','won','lost') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quote_requests_id` PRIMARY KEY(`id`)
);

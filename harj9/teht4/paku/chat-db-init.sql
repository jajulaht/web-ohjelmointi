DROP TABLE IF EXISTS `chat`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message` TEXT NOT NULL,
  `sent_on` TIMESTAMP NOT NULL,
  PRIMARY KEY (`chat_id`),
  KEY `chat_userid_fk` (`user_id`),
  CONSTRAINT `chat_userid_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO users (username, email)  VALUES ('ara', 'Ari.Rantala@jamk.fi');
INSERT INTO users (username, email)  VALUES ('mapas', 'Pasi Manninen@jamk.fi');

INSERT INTO chat (user_id, message, sent_on)  VALUES (1, 'Hello, mapas!', now());
INSERT INTO chat (user_id, message, sent_on)  VALUES (2, 'Hello, ara! ', now());

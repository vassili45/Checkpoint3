CREATE TABLE utilisateur (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO utilisateur (id, email, password) VALUES (1, 'admin@admin.com', 'admin123');

CREATE TABLE project (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Nom varchar(255) NOT NULL,
  Url VARCHAR(1000) NOT NULL,
  Screenshot VARCHAR(1000),
  Description VARCHAR(1000)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project (id, Nom, Url, Screenshot, Description) VALUES (1, 'Origins Digitals', 'https://origins.remote-fr-3.wilders.dev/', '/uploads/Origins_Digitals.png', 'Ce project ai réaliser en 3 mois');
INSERT INTO project (id, Nom, Url, Screenshot, Description) VALUES (2, 'Origins Digitals', 'https://github.com/WildCodeSchool/2022-09-JS-RMT-JSCREW-projet2-team1', '/uploads/Poke_mall.png', 'Ce project ai réaliser en 1 mois');
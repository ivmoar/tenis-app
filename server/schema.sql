-- Database creation
CREATE DATABASE `club_tenis_villacarmen`;

-- How to use the new database
USE club_tenis_villacarmen;

-- Creation of tables
CREATE TABLE `personas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `dni` varchar(20) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `tipo` enum('Monitor','Alumno','Director') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `monitores` (
  `id_persona` int(11) NOT NULL,
  `cuenta_banco` varchar(30) DEFAULT NULL,
  `horas_anuales` int(11) DEFAULT NULL,
  `horas_mensuales` int(11) DEFAULT NULL,
  `salario_total` decimal(10,2) DEFAULT NULL,
  `precio_por_hora` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  CONSTRAINT `monitores_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `alumnos` (
  `id_persona` int(11) NOT NULL,
  `padre_madre` varchar(100) DEFAULT NULL,
  `telefono_padre_madre` varchar(20) DEFAULT NULL,
  `numero_dias_entrenamiento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `alumnos_clases` (
  `alumno_id` int(11) NOT NULL,
  `clase_id` int(11) NOT NULL,
  PRIMARY KEY (`alumno_id`,`clase_id`),
  KEY `clase_id` (`clase_id`),
  CONSTRAINT `alumnos_clases_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos` (`id_persona`),
  CONSTRAINT `alumnos_clases_ibfk_2` FOREIGN KEY (`clase_id`) REFERENCES `clases` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `clases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `fecha_hora` datetime NOT NULL,
  `monitor_id` int(11) DEFAULT NULL,
  `director_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `monitor_id` (`monitor_id`),
  KEY `director_id` (`director_id`),
  CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`monitor_id`) REFERENCES `monitores` (`id_persona`),
  CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`director_id`) REFERENCES `personas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `recursos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_recurso` varchar(100) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `recursos_clases` (
  `recurso_id` int(11) NOT NULL,
  `clase_id` int(11) NOT NULL,
  PRIMARY KEY (`recurso_id`,`clase_id`),
  KEY `clase_id` (`clase_id`),
  CONSTRAINT `recursos_clases_ibfk_1` FOREIGN KEY (`recurso_id`) REFERENCES `recursos` (`id`),
  CONSTRAINT `recursos_clases_ibfk_2` FOREIGN KEY (`clase_id`) REFERENCES `clases` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- How to insert information into the tables
INSERT INTO personas (nombre, apellidos, dni, telefono, direccion, tipo) 
VALUES ('Juan', 'Pérez', '12345678A', '123456789', 'Calle Falsa 123', 'Alumno');

INSERT INTO monitores (id_persona, cuenta_banco, horas_anuales, horas_mensuales, salario_total, precio_por_hora) 
VALUES (LAST_INSERT_ID(), 'ES1234567890123456789012', 2000, 160, 30000.00, 15.00);

INSERT INTO alumnos (id_persona, padre_madre, telefono_padre_madre, numero_dias_entrenamiento) 
VALUES (LAST_INSERT_ID(), 'Laura García', '600765432', 5);

INSERT INTO clases (nombre, fecha_hora, monitor_id, director_id) 
VALUES ('Clase de Yoga', '2024-08-01 10:00:00', 1, 2);

INSERT INTO recursos (nombre_recurso, cantidad) 
VALUES ('Pista 1', 1);

INSERT INTO recursos_clases (recurso_id, clase_id) 
VALUES (LAST_INSERT_ID(), 1);

INSERT INTO alumnos_clases (alumno_id, clase_id) 
VALUES (2, 1);

INSERT INTO personas (nombre, apellidos, dni, telefono, direccion, tipo) 
VALUES ('Carlos', 'Morant', '9183632', '611423214', 'Calle Falsa 123', 'Monitor'),
('Pablo', 'Torres', '91835432', '644575499', 'Calle Falsa 123', 'Monitor'),
('Jose', 'Vicent', '9632', '691906761', 'Calle Falsa 123', 'Monitor');

INSERT INTO monitores (id_persona, cuenta_banco, horas_anuales, horas_mensuales, salario_total, precio_por_hora) 
VALUES (7, 'ES1234567890123456789012', 0, 0, 00.00, 7.00),
(8, 'ES1234567890123456789012', 0, 0, 00.00, 8.00),
(6, 'ES1234567890123456789012', 0, 0, 00.00, 8.00),
(9, 'ES1234567890123456789012', 0, 0, 00.00, 10.00);

-- QUERYS
-- How to select all information about personas
SELECT * FROM personas;

-- How to select all information about monitores
SELECT * FROM monitores;

-- How to filter personas_id depends on their type
SELECT id FROM personas WHERE tipo='Monitor';

-- How to obtain name and id from personas
SELECT nombre, id FROM personas;
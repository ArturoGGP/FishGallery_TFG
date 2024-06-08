INSERT INTO formatos_ventas (nombre) 
VALUES 
('En filetes'),
('Completo'),
('Completo o en filetes');

INSERT INTO paises (nombre, continente) 
VALUES 
('España', 'Europa'),
('Noruega', 'Europa'),
('Paises Bajos', 'Europa'),
('China', 'Asia'),
('Tailandia', 'Asia'),
('Vietnam', 'Asia'),
('India', 'Asia'),
('Indonesia', 'Asia'),
('Canadá', 'Norteamerica'),
('Estados Unidos', 'Norteamerica'),
('Chile', 'Sudamerica'),
('Perú', 'Sudamerica'),
('Argentina', 'Sudamerica');

INSERT INTO tipos_pescado (nombre, descripcion) 
VALUES 
('Pescado Blanco', 'Carne firme y baja en grasa, ideal para diversas preparaciones culinarias.'),
('Pescado Azul', 'Rico en ácidos grasos omega-3, ofrece un sabor jugoso y beneficios para la salud cardiovascular.'),
('Moluscos', 'Delicada carne con una variedad de sabores, a menudo consumidos crudos o cocidos como parte de platos de mariscos.'),
('Cefalópodos', 'Con su cuerpo blando y tentáculos, ofrecen un sabor distintivo y una textura elástica, populares en la cocina mediterránea y asiática.'),
('Crustáceos', 'Carne dulce y delicada envuelta en un exoesqueleto duro, incluyendo langostas, cangrejos y camarones entre sus variedades más conocidas.');

INSERT INTO tipos_escamado (nombre) 
VALUES 
('Sin escamas'),
('Pocas escamas'),
('Muchas escamas');
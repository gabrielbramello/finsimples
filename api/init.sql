CREATE DATABASE finsimples;

use finsimples;

CREATE TABLE usuario (
	id int(8) primary key auto_increment,
    nome varchar(100) not null,
    login varchar(100) unique key not null,
    senha varchar(100) not null,
    ativo tinyint(1) not null default 1
);

INSERT INTO usuario (nome, login, senha) VALUES
('Gabriel Mello', 'gabriel', 'teste'),
('Lucas Lima', 'lucas', 'teste');


CREATE TABLE caixa (
	id int(8) primary key auto_increment,
    id_usuario int(2) not null,
    id_tipo_caixa int(2) not null,
    valor_inicial double(10,2) not null default 0,
    valor_total double(10,2) not null default 0,
    mes varchar(15),
    ano varchar(15) 
);

INSERT INTO caixa (id_usuario, id_tipo_caixa, valor_inicial, valor_total, mes, ano) VALUES 
(1, 1, 10, 10, null, null),
(1, 2, 0, 0, '01', '2022'),
(1, 2, 0, 0, '02', '2022'),
(1, 2, 0, 0, '03', '2022'),
(1, 2, 0, 0, '04', '2022'),
(1, 2, 0, 0, '05', '2022'),
(1, 2, 0, 0, '06', '2022'),
(1, 2, 0, 0, '07', '2022'),
(1, 2, 0, 0, '08', '2022'),
(1, 2, 0, 0, '09', '2022'),
(1, 2, 0, 0, '10', '2022'),
(1, 2, 0, 0, '11', '2022'),
(1, 2, 0, 0, '12', '2022');

CREATE TABLE tipo_caixa (
	id int primary key auto_increment,
    descricao varchar(100) not null,
    ativo tinyint(1) not null default 1
);

INSERT INTO tipo_caixa(descricao) VALUES 
('mensal'),
('total'),

CREATE TABLE categoria (
	id int(2) primary key auto_increment,
    descricao varchar(100) not null,
    id_tipo_categoria int(2) not null,
    ativo tinyint(1) not null default 1
);

INSERT INTO categoria(descricao, id_tipo_categoria) VALUES 
('Salários', 1),
('Bônus', 1),
('Crédito', 2),
('Entreternimento', 2);

CREATE TABLE tipo_categoria (
	id int(2) primary key auto_increment,
    descricao varchar(100) not null,
    ativo tinyint(1) not null default 1
);

INSERT INTO tipo_categoria(descricao) VALUES 
('Renda', 1),
('Despesas', 2);

CREATE TABLE movimentacao(
	id int(2) primary key auto_increment,
    id_categoria int(2) not null,
    descricao varchar(100) not null,
    valor double(10,2) not null default 0;
);

INSERT INTO movimentacao(id_categoria, descricao, valor) VALUES 
(1, 'OSM', 5000),
(2, 'Freelance', 1000),
(3, 'NuBank', 1000),
(4, 'Cinema', 100);

-- ---
-- FKS
-- ---
ALTER TABLE `simulador`.`cliente` 
ADD INDEX `fk_cliente_tipo_endereco_idx` (`id_tipo_endereco` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`cliente` 
ADD CONSTRAINT `fk_cliente_tipo_endereco`
  FOREIGN KEY (`id_tipo_endereco`)
  REFERENCES `simulador`.`tipo_endereco` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `simulador`.`grupo_valor` 
ADD INDEX `fk_grupo_valor_grupo_idx` (`id_grupo` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`grupo_valor` 
ADD CONSTRAINT `fk_grupo_valor_grupo`
  FOREIGN KEY (`id_grupo`)
  REFERENCES `simulador`.`grupo` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `simulador`.`movimentacao` 
ADD INDEX `fk_movimentacao_pedido_idx` (`id_pedido` ASC) VISIBLE,
ADD INDEX `fk_movimentacao_status_idx` (`id_status` ASC) VISIBLE,
ADD INDEX `fk_movimentacao_usuario_idx` (`id_usuario` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`movimentacao` 
ADD CONSTRAINT `fk_movimentacao_pedido`
  FOREIGN KEY (`id_pedido`)
  REFERENCES `simulador`.`pedido` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_movimentacao_status`
  FOREIGN KEY (`id_status`)
  REFERENCES `simulador`.`status` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_movimentacao_usuario`
  FOREIGN KEY (`id_usuario`)
  REFERENCES `simulador`.`usuario` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `simulador`.`pedido` 
ADD INDEX `fk_pedido_cliente_idx` (`id_cliente` ASC) VISIBLE,
ADD INDEX `fk_pedido_categoria_idx` (`id_categoria` ASC) VISIBLE,
ADD INDEX `fk_pedido_status_idx` (`id_status` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`pedido` 
ADD CONSTRAINT `fk_pedido_cliente`
  FOREIGN KEY (`id_cliente`)
  REFERENCES `simulador`.`cliente` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_pedido_categoria`
  FOREIGN KEY (`id_categoria`)
  REFERENCES `simulador`.`categoria` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_pedido_status`
  FOREIGN KEY (`id_status`)
  REFERENCES `simulador`.`status` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `simulador`.`pedido_recurso` 
ADD INDEX `fk_pedido_recurso_pedido_idx` (`id_pedido` ASC) VISIBLE,
ADD INDEX `fk_pedido_recurso_recurso_idx` (`id_recurso` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`pedido_recurso` 
ADD CONSTRAINT `fk_pedido_recurso_pedido`
  FOREIGN KEY (`id_pedido`)
  REFERENCES `simulador`.`pedido` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_pedido_recurso_recurso`
  FOREIGN KEY (`id_recurso`)
  REFERENCES `simulador`.`recurso` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `simulador`.`produto` 
ADD INDEX `fk_produto_categoria_idx` (`id_categoria` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`produto` 
ADD CONSTRAINT `fk_produto_categoria`
  FOREIGN KEY (`id_categoria`)
  REFERENCES `simulador`.`categoria` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `simulador`.`produto_recurso` 
ADD INDEX `fk_produto_recurso_recurso_idx` (`id_recurso` ASC) VISIBLE,
ADD INDEX `fk_produto_recurso_produto_idx` (`id_produto` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`produto_recurso` 
ADD CONSTRAINT `fk_produto_recurso_recurso`
  FOREIGN KEY (`id_recurso`)
  REFERENCES `simulador`.`recurso` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_produto_recurso_produto`
  FOREIGN KEY (`id_produto`)
  REFERENCES `simulador`.`produto` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `simulador`.`recurso` 
ADD INDEX `fk_recurso_unidade_idx` (`id_unidade` ASC) VISIBLE,
ADD INDEX `fk_recurso_tipo_campo_idx` (`id_tipo_campo` ASC) VISIBLE,
ADD INDEX `fk_recurso_grupo_idx` (`id_grupo` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`recurso` 
ADD CONSTRAINT `fk_recurso_unidade`
  FOREIGN KEY (`id_unidade`)
  REFERENCES `simulador`.`unidade` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_recurso_tipo_campo`
  FOREIGN KEY (`id_tipo_campo`)
  REFERENCES `simulador`.`tipo_campo` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_recurso_grupo`
  FOREIGN KEY (`id_grupo`)
  REFERENCES `simulador`.`grupo` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `simulador`.`usuario` 
ADD INDEX `fk_usuario_perfil_idx` (`id_perfil` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`usuario` 
ADD CONSTRAINT `fk_usuario_perfil`
  FOREIGN KEY (`id_perfil`)
  REFERENCES `simulador`.`perfil` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `simulador`.`formula` 
ADD INDEX `fk_formula_categoria_idx` (`id_categoria` ASC) VISIBLE;
;
ALTER TABLE `simulador`.`formula` 
ADD CONSTRAINT `fk_formula_categoria`
  FOREIGN KEY (`id_categoria`)
  REFERENCES `simulador`.`categoria` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

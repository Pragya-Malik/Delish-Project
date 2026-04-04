CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price INT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  item TEXT,
  quantity INT
);

INSERT INTO menu (name, price) VALUES
('Pizza', 250),
('Burger', 120),
('Pasta', 200);
CREATE TABLE list(
  id         SERIAL PRIMARY KEY,
  title      VARCHAR(64) NOT NULL,
  order      INTEGER,
	board_id   INTEGER REFERENCES board(id),
	created_at TIMESTAMP WITHOUT TIME ZONE,
	updated_at TIMESTAMP WITHOUT TIME ZONE
);
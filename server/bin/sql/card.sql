CREATE TABLE card(
  id         SERIAL PRIMARY KEY,
  title      VARCHAR(64),
  order      INTEGER,
	list_id    INTEGER REFERENCES list(id),
	created_at TIMESTAMP WITHOUT TIME ZONE,
	updated_at TIMESTAMP WITHOUT TIME ZONE
);
CREATE TABLE board(
  id         SERIAL PRIMARY KEY,
  title      VARCHAR(64) NOT NULL,
  info       VARCHAR(255),
	user_id    INTEGER REFERENCES user(id),
	created_at TIMESTAMP WITHOUT TIME ZONE,
	updated_at TIMESTAMP WITHOUT TIME ZONE
);
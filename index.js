//імпорт пакету для маніпуляцій з Postgres
const pg = require("pg");

//створення рядку з'єднання
const connectionString =
  "postgres://epurlmjbzyrzif:8eefcebf5836e46a4276772c44fb632811bf1a428746f48ccae99fa47631533e@ec2-18-203-62-227.eu-west-1.compute.amazonaws.com:5432/d8t392r503csq6";

//створення пулу з'єднань між базою даних та додатком
const pool = new pg.Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false },
});

//запит на створення таблиці фільмів з двома полями: назва фільму та його жанр
pool.query(`CREATE TABLE films (
    title       varchar(40) NOT NULL,
    kind        varchar(10)
)`);

//запит на додавання даних до таблиці
pool.query(
  `INSERT INTO "films"
        ("title", "kind")
        VALUES('Wonder Woman', 'drama'),
        ('Batman', 'drama'),
        ('Flash', 'comedy'),
        ('Slash', 'trill'),
        ('Star Wars', 'fantasy'),
        ('Mandalorian', 'fantasy'),
        ('Prince of Percia', 'fantasy')`
);

//функція для виведення даних з таблиці в консоль
async function films() {
  const { rows } = await pool.query(`select * from "films"`);
  console.log(rows);
}
//виклик функції
films();

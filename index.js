const pg = require("pg");

const connectionString =
  "postgres://epurlmjbzyrzif:8eefcebf5836e46a4276772c44fb632811bf1a428746f48ccae99fa47631533e@ec2-18-203-62-227.eu-west-1.compute.amazonaws.com:5432/d8t392r503csq6";

const pool = new pg.Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false },
});

//pool.query(`create table "users-pis"`);
// pool.query(`CREATE TABLE films (
//     title       varchar(40) NOT NULL,
//     kind        varchar(10)
// )`);

// pool.query(
//   `INSERT INTO "films"
//         ("title", "kind")
//         VALUES('Wonder Woman', 'drama'),
//         ('Batman', 'drama'),
//         ('Flash', 'comedy'),
//         ('Slash', 'trill')`
// );

// pool.query(
//   `INSERT INTO "films"
//         ("title", "kind")
//         VALUES('Star Wars', 'fantasy'),
//         ('Mandalorian', 'fantasy'),
//         ('Prince of Percia', 'fantasy')`
// );

async function films() {
  const { rows } = await pool.query(`select * from "films"`);
  console.log(rows);
}
films();

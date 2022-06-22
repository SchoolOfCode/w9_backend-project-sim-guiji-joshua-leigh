import pg from "pg";
console.log(process.env.PGUSER)
const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false },
});
export default async function query(text, params, callback) {
    return pool.query(text, params, callback);
}
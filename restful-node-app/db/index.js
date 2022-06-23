import pg from "pg";
console.log('hello', process.env.DATABASE_URI)
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: { rejectUnauthorized: false },
});
// const pool = new pg.Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
//   ssl: { rejectUnauthorized: false },
// });

export default pool
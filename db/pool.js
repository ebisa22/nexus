import { Pool } from "pg";

const database_url = process.env.DATABASE_URL;
if (!database_url) {
  throw new Error("database url missing");
}

const pool=new Pool({
 connectionString:database_url
})

export default pool;
//import query 'func'from db/index
//write SQL string that creates table
//use query func to communicate with database(hand in SQL string here)
console.log("Jordan is the worst :(")
import {query} from '../index.js';

const sqlString = 'CREATE TABLE IF NOT EXISTS Quotes(quote_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author_id INT, quote TEXT);';
//console.log(res.rows[0].quote);

async function createFeelGoodQuotesTable() {
    const res = await query(sqlString)
    console.log(res)
    console.log("table has been created")
}; 

createFeelGoodQuotesTable();
import quotesData from "../libs/quotesData.js";
import pool from "../db/index.js";

const sqlString = 'CREATE TABLE IF NOT EXISTS Quotes(quote_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author_id INT, quote TEXT);';

export async function createFeelGoodQuotesTable() {
    const res = await pool.query(sqlString)
    console.log(res)
}; 

export async function populateQuotesTable() {
    for(let i=0; i < quotesData.length; i++) {
        const res = await pool.query (`INSERT INTO Quotes(author_id, quote) VALUES ($1, $2) RETURNING * ;`,
        [quotesData[i].author_id, quotesData[i].quotes]);
        console.log(res.rows[0].quote, "INSERTED");
    }
};

export async function getData () {
    const res = await pool.query(`SELECT * FROM Quotes;`);
    return res.rows;
};


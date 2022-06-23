import  {query}  from "../index.js";

async function populateQuotesTable() {
    for(let i=0; i<quotes.length; i++) {
        const res = await query (`INSERT INTO quotes{author_id, quote}VALUES{quotes[i].author_id, quotes[i].quote}`);
    }
    }

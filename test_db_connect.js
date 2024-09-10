import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { query } from 'express';

dotenv.config()

console.log("HUH");

// create connection to db
const connection = await mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});

// simple query
try {
  // const sql = 'INSERT INTO `test_data`(`t_name`, `t_birthday`) VALUES (?,?), (?,?)';
  // const values = ['todd', '2001-09-03', 'jef', '1972-12-19'];
  const sql = 'SELECT * FROM `test_data`';
  const values = [];
  const [results, fields] = await connection.execute(sql, values);

  console.log(results)
  console.log(fields)
} catch (err) { // if failed, print out error
  console.log(err);
}

// get data from NASA API
async function test_get_data() {
  try {
    // The NASA api does not allow for json data to be sent in the request.
    // Instead, the URL itself must be changed to include the data.
    // Also it appears that the API key is going to be exposed on compile so I will 
    //  need to redirect it through my own api.
    // Count returns random subset of images, cannot be used with dates

    const url = `https://api.nasa.gov/planetary/apod`; // url to get data from 
    const api_key = process.env.NASA_API_KEY;
    const date = '2002-06-17';
    const count = 10;
    const query_string = `?api_key=${api_key}&date=${date}`;
    // const query_string = `?api_key=${api_key}&count=${count}`;
    // use the async fetch (get) function from fetch library
    /*
    {
      method: "GET",
      // body: JSON.stringify({
      //   // date:'today',
      //   // start_date:'none if used with date',
      //   // end_date:'YYYY-MM-DD',
      //   // count:1,
      //   // thumbs:false,
      //   api_key:process.env.NASA_API_KEY
      // })
    }
    */
    const response = await fetch(url + query_string); 
    // validate response
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error(err.message);
  }
}

await test_get_data();
connection.end((error) => {
  if (error) {
    console.log(`Issue with ending DB connection: ${error}`);
  } else {
    console.log(`DB connection closed successfully.`);
  }
});
console.log("connection ended");
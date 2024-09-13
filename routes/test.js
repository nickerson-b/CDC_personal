import express from 'express';
import fs from 'fs';

const router = express.Router();

/* 
    response route for localhost:3000/ or localhost:3000
*/
router.get("/", async (req, res, next) => { // making an async callback function for the router
    // res.send("Message and data to be sent back to the app!");
    const homepageHTML = await fs.promises.readFile('public/html_templates/testpage.html', 'utf-8');
    res.send(homepageHTML);
});

/* response route for /test */
router.get("/test", (req, res, next) => {
    res.send("Testing successful");
});

export default router;
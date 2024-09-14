import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config()
const router = express.Router();

/* 
    response route for localhost:3000/ or localhost:3000
*/
router.get("/", async (req, res, next) => { // making an async callback function for the router
    // res.send("Message and data to be sent back to the app!");
    // get the template
    let homepageHTML = await fs.promises.readFile('public/html_templates/testpage.html', 'utf-8');

    // get the picture of the day from NASA API to display in the template
    // still haven't totally figured out how to serve files from public
    let imageUrl = 'public/images/missing_image_url.jpg';           // values to be added to temp
    let explanation = 'No explanation of image could be retrieved.'
    let title = 'No title for image could be retrieved.'
    let apodJson = null; // nasa api call to populate this. If call fails, defaults are displayed
    try {
      const d = new Date(); // gets the current date & time. Month is 0 indexed  
      const url = `https://api.nasa.gov/planetary/apod`;
      const apiKey = process.env.NASA_API_KEY;
      const today = `${d.getFullYear()}-${(d.getMonth() + 1)}-${d.getDate()}`;
      const queryString = `?api_key=${apiKey}&date=${today}`;
      const response = await fetch(url + queryString); 
      // validate response
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      apodJson = await response.json();
      console.log(apodJson);
    } catch (err) {
      console.error(err.message);
    }
    // Load API response into dynamic content
    if (apodJson && apodJson.hasOwnProperty('hdurl')) { // if else statements could all take  
        imageUrl = apodJson.hdurl;// place inside an 'if (apod_json)', but this is more legible
    } else if (apodJson && apodJson.hasOwnProperty('url')){
        imageUrl = apodJson.url;
    }
    if (apodJson && apodJson.hasOwnProperty('explanation')){
        explanation = apodJson.explanation;
    }
    if (apodJson && apodJson.hasOwnProperty('title')){
        title = apodJson.title;
    }
    const displayImage = `
        <script>
            document.getElementById('topicHeading').innerText = \`${title}\`;
            document.getElementById('topicDescription').innerText = \`${explanation}\`;
            document.getElementById('displayPicture').setAttribute('src', '${imageUrl}');
            document.getElementById('displayPicture').setAttribute('alt', \`${title}\`);
        </script>
    `;

    // add dynamic content into the page
    homepageHTML = homepageHTML.replace('</body>', `${displayImage}</body>`); // replace ending tag with the script and a new ending tag
    res.send(homepageHTML);
});

/* response route for /test */
router.get("/test", (req, res, next) => {
    res.send("Testing successful");
});

export default router;
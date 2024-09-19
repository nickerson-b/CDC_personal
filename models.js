import mongoose from 'mongoose';
import NewsAPI from 'newsapi';
import dotenv from 'dotenv'
dotenv.config()


/*
{
    "id":102693,
    "sol":1000,
    "camera":{
        "id":20,
        "name":"FHAZ",
        "rover_id":5,
        "full_name":"Front Hazard Avoidance Camera"
    },
    "img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
    "earth_date":"2015-05-30",
    "rover":{
        "id":5,
        "name":"Curiosity",
        "landing_date":"2012-08-06",
        "launch_date":"2011-11-26",
        "status":"active",
        "max_sol":4102,
        "max_date":"2024-02-19",
        "total_photos":695670,
        "cameras":[
            {
                "name":"FHAZ",
                "full_name":"Front Hazard Avoidance Camera"
            },
            {
                "name":"NAVCAM",
                "full_name":"Navigation Camera"
            },
            {
                "name":"MAST",
                "full_name":"Mast Camera"
            },
            {
                "name":"CHEMCAM",
                "full_name":"Chemistry and Camera Complex"
            },
            {
                "name":"MAHLI",
                "full_name":"Mars Hand Lens Imager"
            },
            {
                "name":"MARDI",
                "full_name":"Mars Descent Imager"
            },
            {
                "name":"RHAZ",
                "full_name":"Rear Hazard Avoidance Camera"
            }
        ]
    }
}
*/
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const topicSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    cared: { type: Boolean, default: false }
});

const Topic = mongoose.model("Topic", topicSchema);

const articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    made: { type: Date, default: Date.now },
    archived: { type: Boolean, default: false }
});

const Article = mongoose.model("Article", articleSchema);

const userSchema = new mongoose.Schema({
    name: String,
    caredArticles: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article' 
    }], 
    notCaredArticles: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article' 
    }]
});
const User = mongoose.model("User", userSchema);

const populateArticlesFromTopics = async () => {
    try {
        const a = await Article.find({}); // get article titles
        const aTitles = a.map(article => article.title);

        const topics = await Topic.find({}).exec(); // query for all topics
        let articles = topics.map(topic => { // re-set the 3 fields that match, leaving archived as false.
            if(aTitles.includes(topic.title)) {
                return null;
            } else {
                const g = {
                    title: topic.title,
                    description: topic.description,
                    url: topic.url,
                    urlToImage: topic.urlToImage
                };
                aTitles.push(topic.title);
                return g;
            }
        });
        articles = articles.filter(article => article !== null);
        await Article.insertMany(articles); // save the articles to the database
        console.log("articles populated from topics successfully");
    } catch (error) {
        console.error("error:", error);
    }
    // try {
    //     const a = await Article.find({});
    //     const articles = a.map(topic => { // re-set the 3 fields that match, leaving archived as false.
    //         const g = {
    //             title: topic.title,
    //             description: topic.description,
    //             url: topic.url,
    //         };
    //         return g;
    //     });
    //     await Article.insertMany(articles); // save the articles to the database
    //     console.log("articles populated from topics successfully");
    // } catch (error) {
    //     console.error("error:", error);
    // }
};

const populateFromAPI = async () => {
    try {
        const response = await newsapi.v2.topHeadlines({
            country: 'us',
            pageSize: 100,
        });
        
        // console.log("Response from News API:", response);

        const articles = response.articles.map(article => {
            const title = article.title.replace(/ - .*/, '').trim();
            return {
                title,
                description: article.description,
                url: article.url,
                urlToImage: article.urlToImage
            };
        });
        

        await Topic.insertMany(articles);
        console.log("articles populated from API successfully");
    } catch (error) {
        console.error("error:", error);
    }
}


const connectDB = async () => {
    try {
        console.log("connecting to mongodB")
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("successfully connected to mongodb")
        // await populateFromAPI();
        await populateArticlesFromTopics();
    } catch (error) {
        console.error("error:", error)
    }
};

export { connectDB, Topic, User, Article };

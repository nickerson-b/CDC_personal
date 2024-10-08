import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url'; // named imports for finding
import { dirname, join } from 'path';      // dir paths for serving statics
// import sessions from 'express-session'

// To install msal-node-wrapper, run:
// npm install https://gitpkg.now.sh/kylethayer/ms-identity-javascript-nodejs-tutorial-msal-node-v2-/Common/msal-node-wrapper?main
// import WebAppAuthProvider from 'msal-node-wrapper'

// const authConfig = {
//     auth: {
//         clientId: "37212b3b-f488-4b1a-b898-ef001135b7c9",
//         authority: "https://login.microsoftonline.com/f6b6dd5b-f02f-441a-99a0-162ac5060bd2",
//         clientSecret: "2SI8Q~kfgkhXc3-h.21XS5dNGS6MpkP9KiexRb-c",
//         redirectUri: "http://localhost:3000/redirect" //"https://careordontcare.onrender.com/redirect" or "https://care-or-dont-care.vercel.app/redirect"
//     },
//     system: {
//         loggerOptions: {
//             loggerCallback(loglevel, message, containsPii) {
//                 console.log(message);
//             },
//             piiLoggingEnabled: false,
//             logLevel: 3,
//         }
//     }
// };

// import { connectDB, Topic } from './models.js';

// import our routes
import testRouter from './routes/test.js';
// import indexRouter from './routes/homepage.js';
// import careRouter from './routes/care.js';
// import dontcareRouter from './routes/dontcare.js';
// import vizRouter from './routes/viz.js';

// construct paths to current dir
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // Create the express app
// connectDB();

// use statements for our middleware 
app.use(logger('dev')); // setup the logger
app.use(express.json()); // parsers for body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public'))); // serve static files from public

// const oneDay = 1000 * 60 * 60 * 24
// app.use(sessions({
//     secret: "2SI8Q~kfgkhXc3-h.21XS5dNGS6MpkP9KiexRb-c",
//     saveUninitialized: true,
//     cookie: {maxAge: oneDay},
//     resave: false
// }))

// const authProvider = await WebAppAuthProvider.WebAppAuthProvider.initialize(authConfig);
// app.use(authProvider.authenticate());

// use statements for routers
app.use('/', testRouter);
// app.use('/', indexRouter);
// app.use('/care', careRouter);
// app.use('/dontcare', dontcareRouter);
// app.use('/viz', vizRouter);

// app.get('/signin', (req, res, next) => {
// 	return req.authContext.login({
// 		postLoginRedirectUri: "/",
// 	})
//     (req, res, next);
// });

// app.get( '/signout', (req, res, next) => {
// 	return req.authContext.logout({
// 		postLogoutRedirectUri: "/", // redirect here after logout
// 	})
//     (req, res, next);
// });

// app.get('/topCaredArticles', async (req, res) => {
//     try {
//         const topCaredArticles = await Article.aggregate([
//             {
//                 $match: {
//                     cared: true
//                 }
//             },
//             {
//                 $group: {
//                     _id: '$title',
//                     clickCount: { $sum: 1 }
//                 }
//             },
//             {
//                 $sort: {
//                     clickCount: -1
//                 }
//             },
//             {
//                 $limit: 3
//             }
//         ]);

//         res.json(topCaredArticles);
//     } catch (error) {
//         console.error('Error fetching top cared articles:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.use(authProvider.interactionErrorHandler());

// allow the app to be hosted locally until another solution is found
app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})

export default app;
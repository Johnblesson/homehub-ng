// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import multer from "multer";
// import ejs from "ejs";
// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import session from 'express-session';
// import flash from 'connect-flash';
// import cookieParser from 'cookie-parser';
// // import webpush from 'web-push';
// import methodOverride from 'method-override';
// import passport from './server/passport/passport-config.js';
// import connectDB from './server/database/connection.js';
// import viewRoutes from "./server/routes/viewRoutes.js";
// import authRoutes from "./server/routes/auth.js";
// import homepageRoutes from "./server/routes/homepage.js";
// import profileRoutes from "./server/routes/profile.js";
// import apartmentsRoutes from "./server/routes/apartments.js";
// import applyRoute from "./server/routes/apply.js";
// import adminRoutes from "./server/routes/admin.js";
// import accountRoutes from "./server/routes/account.js";
// import contactRoutes from "./server/routes/contact.js";
// import agentsRoute from "./server/routes/agents.js";

// const app = express();
// dotenv.config();
// connectDB();
// app.use(express.json());
// app.use(cookieParser());
// app.use(flash());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// // Set the view engine to ejs
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const templatePath = path.join(__dirname, './views');
// app.set('view engine', 'ejs');
// app.set('views', templatePath);

// // Serve static files from the 'public' directory
// app.use(express.static('public'))
// app.use("/assets", express.static(path.join(__dirname, "public/assets"))); 


// // Serve static files from the 'public' directory
// app.use(express.static('public', {
//   setHeaders: (res, path, stat) => {
//     if (path.endsWith('.css')) {
//       res.set('Content-Type', 'text/css');
//     }
//   }
// }));


// // Add express-session middleware
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: true,
//   saveUninitialized: true
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// // Middleware to parse "_method" query parameter
// app.use(methodOverride('_method'));

// // // Error handling middleware
// // app.use((err, req, res, next) => {
// //   console.error(err.stack);
// //   res.status(500).send('Something went wrong!');
// // });


// // const publicVapidKey = "BPbBx_r7-40UPTOMg54tsehbJeu_FIOmOm5QVFev8ox2HkOr7yNNz8IeFPdhwpJqbAj9Pgyj0MN_Zaeu9liIyEw";
// // const privateVapidKey = "fl3GCcBHVGEJLJWtn4Plw2FfIpVMs0ZTNyHb_fRqzwk";

// // webpush.setVapidDetails('mailto:johnblessonrowe@gmail.com', publicVapidKey, privateVapidKey);

// // let subscriptions = [];

// // app.post('/subscribe', (req, res) => {
// //   const subscription = req.body;
// //   subscriptions.push(subscription);
// //   res.status(201).json({});
// // });

// // Use the viewRoutes
// app.use(viewRoutes);
// app.use(authRoutes);
// app.use(homepageRoutes);
// app.use(profileRoutes);
// app.use(apartmentsRoutes);
// app.use(applyRoute);
// app.use(adminRoutes);
// app.use(accountRoutes);
// app.use(contactRoutes);
// app.use(agentsRoute);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import multer from "multer";
// import ejs from "ejs";
// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import session from 'express-session';
// import flash from 'connect-flash';
// import cookieParser from 'cookie-parser';
// import methodOverride from 'method-override';
// import passport from './server/passport/passport-config.js';
// import connectDB from './server/database/connection.js';
// import viewRoutes from "./server/routes/viewRoutes.js";
// import authRoutes from "./server/routes/auth.js";
// import homepageRoutes from "./server/routes/homepage.js";
// import profileRoutes from "./server/routes/profile.js";
// import apartmentsRoutes from "./server/routes/apartments.js";
// import applyRoute from "./server/routes/apply.js";
// import adminRoutes from "./server/routes/admin.js";
// import accountRoutes from "./server/routes/account.js";
// import contactRoutes from "./server/routes/contact.js";
// import agentsRoute from "./server/routes/agents.js";
// import http from "http"; // Import http
// import { Server } from "socket.io"; // Import Socket.io

// const app = express();
// const server = http.createServer(app); // Create HTTP server
// const io = new Server(server); // Create Socket.io server

// dotenv.config();
// connectDB();
// app.use(express.json());
// app.use(cookieParser());
// app.use(flash());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// // Set the view engine to ejs
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const templatePath = path.join(__dirname, './views');
// app.set('view engine', 'ejs');
// app.set('views', templatePath);

// // Serve static files from the 'public' directory
// app.use(express.static('public'));
// app.use("/assets", express.static(path.join(__dirname, "public/assets"))); 

// app.use(express.static('public', {
//   setHeaders: (res, path, stat) => {
//     if (path.endsWith('.css')) {
//       res.set('Content-Type', 'text/css');
//     }
//   }
// }));

// // Add express-session middleware
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: true,
//   saveUninitialized: true
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// // Middleware to parse "_method" query parameter
// app.use(methodOverride('_method'));

// // Socket.io connection
// io.on('connection', (socket) => {
//   console.log('A user connected');
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// // Use the viewRoutes
// app.use(viewRoutes);
// app.use(authRoutes);
// app.use(homepageRoutes);
// app.use(profileRoutes);
// app.use(apartmentsRoutes);
// app.use(applyRoute);
// app.use(adminRoutes);
// app.use(accountRoutes);
// app.use(contactRoutes);
// app.use(agentsRoute);

// const PORT = process.env.PORT || 8080;
// server.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export { io }; // Export io to use in other files



import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import session from 'express-session';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import passport from './server/passport/passport-config.js';
import connectDB from './server/database/connection.js';
import viewRoutes from "./server/routes/viewRoutes.js";
import authRoutes from "./server/routes/auth.js";
import homepageRoutes from "./server/routes/homepage.js";
import profileRoutes from "./server/routes/profile.js";
import apartmentsRoutes from "./server/routes/apartments.js";
import applyRoute from "./server/routes/apply.js";
import adminRoutes from "./server/routes/admin.js";
import accountRoutes from "./server/routes/account.js";
import contactRoutes from "./server/routes/contact.js";
import agentsRoute from "./server/routes/agents.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Set the view engine to ejs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const templatePath = path.join(__dirname, './views');
app.set('view engine', 'ejs');
app.set('views', templatePath);

// Serve static files from the 'public' directory
app.use(express.static('public'))
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); 

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
  }
}));

// Add express-session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

// Middleware to parse "_method" query parameter
app.use(methodOverride('_method'));

// Object to keep track of connected users
const connectedUsers = {};

io.on('connection', (socket) => {
  console.log('A user connected');

  // Store user ID when they connect
  socket.on('register', (userId) => {
    connectedUsers[userId] = socket.id;
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    for (const [userId, socketId] of Object.entries(connectedUsers)) {
      if (socketId === socket.id) {
        delete connectedUsers[userId];
        break;
      }
    }
  });
});

// Use the viewRoutes
app.use(viewRoutes);
app.use(authRoutes);
app.use(homepageRoutes);
app.use(profileRoutes);
app.use(apartmentsRoutes);
app.use(applyRoute);
app.use(adminRoutes);
app.use(accountRoutes);
app.use(contactRoutes);
app.use(agentsRoute);

const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

export { io, connectedUsers }; // Export io and connectedUsers to use in other files

// ts express
import  express  from 'express';
import {Userroute} from './Routes/Users-route.js';
import {Contentroute} from './Routes/Contents-route.js';
import {Brainroute} from './Routes/Link-route.js';

import cors from "cors"
const app=express();
app.use(express.json());

// frontend localhost connection 
// app.use(cors({
//   origin:"http://localhost:5173",
//   credentials: true
// }));

app.use(
  cors({
    origin: /http:\/\/localhost:\d+/,
    credentials: true,
  })
);



app.use("/api/v1/user",Userroute);

app.use("/api/v1/content",Contentroute);

app.use("/api/v1/links", Brainroute);


app.listen(3009,() => {
  console.log("✅ Server running on http://localhost:3009");
});


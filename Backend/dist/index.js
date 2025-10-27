// ts express
import express from 'express';
import { Userroute } from './Routes/Users-route.js';
import { Contentroute } from './Routes/Contents-route.js';
import { Brainroute } from './Routes/Link-route.js';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (/^http:\/\/localhost:\d+$/.test(origin))
            return callback(null, true);
        callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use("/api/v1/user", Userroute);
app.use("/api/v1/content", Contentroute);
app.use("/api/v1/links", Brainroute);
app.listen(3009, () => {
    console.log("Server running on http://localhost:3009");
});
//# sourceMappingURL=index.js.map
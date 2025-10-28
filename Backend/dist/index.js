// ts express
import express from 'express';
import { Userroute } from './Routes/Users-route.js';
import { Contentroute } from './Routes/Contents-route.js';
import { Brainroute } from './Routes/Link-route.js';
import cors from "cors";
const app = express();
app.use(express.json());
// app.use(cors({
//   origin: [
//     "http://localhost:5173",  // your React dev server (optional)
//     "chrome-extension://*",   // allow Chrome extensions
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));
app.use(cors({
    origin: (origin, callback) => {
        // ✅ Allow requests with no origin (like mobile apps or curl)
        if (!origin)
            return callback(null, true);
        // ✅ Allow localhost dev servers and Chrome extensions
        const allowedOrigins = [
            /^http:\/\/localhost:\d+$/, // any localhost port
            /^chrome-extension:\/\//
        ];
        if (allowedOrigins.some((regex) => regex.test(origin))) {
            callback(null, true);
        }
        else {
            console.log("❌ Blocked by CORS:", origin);
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use("/api/v1/user", Userroute);
app.use("/api/v1/content", Contentroute);
app.use("/api/v1/links", Brainroute);
app.listen(3009, () => {
    console.log("Server running on http://localhost:3009");
});
//# sourceMappingURL=index.js.map
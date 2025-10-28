// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
import jwt from "jsonwebtoken";
export const userMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    // Safely extract token if prefixed with "Bearer"
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_PASSWORD);
        if (!decoded || typeof decoded !== "object" || !decoded.id) {
            return res.status(403).json({ message: "Invalid token" });
        }
        // @ts-ignore (if you don't have custom type definitions)
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        console.error("JWT verification failed:", err);
        return res.status(403).json({ message: "You are not logged in" });
    }
};
//# sourceMappingURL=middleware.js.map
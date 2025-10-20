import express from "express";
import { ContentModel } from "../Db/db.js";
import { userMiddleware } from "../Middleware/middleware.js";
export const Contentroute = express.Router();
Contentroute.post("/addcontent", userMiddleware, async (req, res) => {
    const type = req.body.type;
    const title = req.body.title;
    const link = req.body.link;
    try {
        await ContentModel.create({
            title,
            link,
            type,
            tages: [],
            userId: req.userId,
        });
        return res.status(200).json({
            message: "Content added successfully😊"
        });
    }
    catch (err) {
        res.status(504).json({
            message: "You are not Signin...",
            error: err
        });
    }
});
Contentroute.get("/viewcontent", userMiddleware, async (req, res) => {
    const userId = req.userId;
    try { //@ts-ignore
        const content = await ContentModel.find({
            userId: userId
        }).populate("userId", "username");
        res.json({
            message: "see my content ! have a nice day",
            content
        });
    }
    catch (err) {
        res.status(504).json({
            message: "Something went to be wrong ...",
            error: err
        });
    }
});
Contentroute.delete("/deletecontent", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    try {
        await ContentModel.deleteMany({
            _id: contentId,
            //check actually correct userid content had been deleted??
            userId: req.userId
        });
        res.json({
            message: "delete the content successfully"
        });
    }
    catch (err) {
        return res.status(503).json({
            message: "Something went to be wrong",
            error: err
        });
    }
});
//# sourceMappingURL=Contents-route.js.map
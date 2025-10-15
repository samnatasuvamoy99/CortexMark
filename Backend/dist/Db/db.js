import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { error } from 'node:console';
//db connection
async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL);
        console.log("monogdb connection successfully 🌏");
    }
    catch (error) {
        console.log("connection error:", error.message);
    }
    ;
}
main();
const UserSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
});
export const UserModel = model("User", UserSchema);
const TagSchema = new Schema({
    title: String
});
export const TagModel = model("Tag", TagSchema);
const ContentSchema = new Schema({
    title: String,
    type: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});
export const ContentModel = model("Content", ContentSchema);
const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true }
});
export const LinkModel = model("Brainshare", LinkSchema);
//# sourceMappingURL=db.js.map
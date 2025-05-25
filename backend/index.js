import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";

dotenv.config();

const app = express();
const _dirname = path.resolve();

const corsOptions = {
  origin: "https://job-portal-nzyh.onrender.com",
  credentials: true, // ✅ Allow credentials (cookies) from frontend
};

// ✅ CORS middleware must come BEFORE cookieParser and routes
app.use(cors(corsOptions));

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ MUST come after cors

// ✅ API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});


// ✅ Server Listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

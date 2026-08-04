//const db = require("./firebase");

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectMongoDB = require("./mongodb");
const Course = require("./models/Course");
const app = express();
connectMongoDB();
const{ GoogleGenAI}= require("@google/genai");
app.use(cors());
app.use(express.json());
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
app.get("/", (req, res) => {
    res.send({
        reply: "Hello from the server! I received your message: "
    });
});
//Chat API
app.post("/chat",async (req, res) => {
    /*const userMessage = req.body.message;
    console.log("Received message from client:", userMessage);
    res.json({
        reply:"Hello from the server! I received message: " + userMessage
    });*/
    //-----------------------------------------------
      try {
        const userMessage = req.body.message;
        const courses = await Course.find();
        const courseList = JSON.stringify(courses, null, 2);
        console.log(courses);
        console.log("Received message:", userMessage);

        const interaction = await ai.interactions.create({
            model: "gemini-3.6-flash",
            //input: userMessage,
            input: `
                You are the AI College Assistant for our university.

                Rules:

                - Never say you are Gemini.
                - Never say you are a Google model.
                - Introduce yourself as the AI College Assistant.
                - Help students with admissions, departments, courses, fees, eligibility, timetable and campus information.
                - Always answer politely.
                - If someone asks questions unrelated to the college, politely explain that you only answer college enquiries.

                College Database

                The following courses exist in the database.

                ${courseList}

                When students ask about courses:

                - Use ONLY these courses.
                - Present them as a clean numbered list.
                - Do not use markdown symbols like **.
                - Mention department and duration.

                Student Question:

                ${userMessage}
                `
        });

        res.json({
            reply: interaction.output_text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            reply: "AI is currently unavailable."
        });
    }
});
/*db.ref("test").set({
    message: "Hello Firebase!",
    createdAt: new Date().toISOString()
})
.then(() => {
    console.log("✅ Test data saved to Firebase");
})
.catch((error) => {
    console.error("❌ Firebase Error:", error);
});*/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
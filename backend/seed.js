const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = require("./mongodb");
const Course = require("./models/Course");

async function seedCourses() {

    try {

        await connectMongoDB();

        console.log("✅ Connected");
        await Course.deleteMany({});
        await Course.insertMany([

    {
        courseName: "BSc Computer Science",
        department: "Computer Science",
        duration: "4 Years",
        faculty: "Faculty of Science",
        description: "Computer Science Degree"
    },

    {
        courseName: "BSc Software Engineering",
        department: "Software Engineering",
        duration: "4 Years",
        faculty: "Faculty of Science",
        description: "Software Engineering Degree"
    },

    {
        courseName: "BSc Information Technology",
        department: "Information Technology",
        duration: "4 Years",
        faculty: "Faculty of Science",
        description: "Information Technology Degree"
    },

    {
        courseName: "BSc Data Science",
        department: "Data Science",
        duration: "4 Years",
        faculty: "Faculty of Science",
        description: "Data Science Degree"
    },

    {
        courseName: "BSc Artificial Intelligence",
        department: "Artificial Intelligence",
        duration: "4 Years",
        faculty: "Faculty of Science",
        description: "Artificial Intelligence Degree"
    }
    ]);
    console.log("✅ Courses Inserted Successfully");
    } catch (error) {

        console.log(error);

    }

}
seedCourses();
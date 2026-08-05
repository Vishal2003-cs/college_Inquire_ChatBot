const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = require("./mongodb");
const Course = require("./models/Course");
const Department = require("./models/Department");
const Staff = require("./models/Staff");
const Faq = require("./models/Faq");

async function seedCourses() {

    try {

        await connectMongoDB();

        console.log("✅ Connected");
        await Course.deleteMany({});
        await Department.deleteMany({});
        await Staff.deleteMany({});
        await Faq.deleteMany({});

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
    //-----------------------------------------
    await Department.insertMany([
    {
        departmentName: "Computer Science",
        faculty: "Faculty of Science",
        description: "Provides undergraduate computer science education.",
        email: "cs@college.edu",
        phone: "+94 21 0000000"
    }
    ]);
    
    console.log("✅ Departments Inserted Successfully");
    //---------------------------------------
    await Staff.insertMany([

    {
        name: "Dr. John Smith",
        email: "john@college.edu",
        staffId: "ST001",
        department: "Computer Science"
    },

    {
        name: "Prof. Jane Wilson",
        email: "jane@college.edu",
        staffId: "ST002",
        department: "Computer Science"
    }

    ]);
    console.log("✅ Staff Inserted Successfully");
    //------------------------------
    await Faq.insertMany([
    {
        question: "How can I apply?",
        answer: "You can apply through the university admission process."
    },

    {
        question: "What courses are available?",
        answer: "We offer Computer Science, Software Engineering, Information Technology, Data Science and Artificial Intelligence."
    },

    {
        question: "What is the duration of the degree?",
        answer: "The undergraduate degree duration is four years."
    },

    {
        question: "Where is the college located?",
        answer: "The college is located in Sri Lanka."
    },

    {
        question: "How can I contact the department?",
        answer: "You can contact the department using the official email or phone number."
    },

    {
        question: "What are the office hours?",
        answer: "Office hours are Monday to Friday from 8.30 AM to 4.30 PM."
    },

    {
        question: "Do you have computer laboratories?",
        answer: "Yes. The department has computer laboratories for practical sessions."
    },

    {
        question: "Is there a library?",
        answer: "Yes. Students can use the university library."
    },

    {
        question: "Who can I contact for academic inquiries?",
        answer: "Please contact the department office or academic staff."
    },

    {
        question: "Do you provide student support?",
        answer: "Yes. Academic staff and the department office provide student support."
    }
    ]);
     console.log("✅ Faqs Inserted Successfully");
    //-------------------------------------
    } catch (error) {

        console.log(error);

    }

}
seedCourses();
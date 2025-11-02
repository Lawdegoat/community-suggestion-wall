 # Community Suggestion Wall

A community feedback and idea-sharing platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It enables users to post, view, and interact with suggestions from others, fostering collaboration and transparency within a group or organization.

<img width="1600" height="817" alt="image" src="https://github.com/user-attachments/assets/d0c18e60-2250-4d91-bb72-716984455dd2" />

#Table of Contents

Project Overview

Features

Technologies

Schema Diagram

Getting Started

Usage

License

# Project Overview

The Community Suggestion Wall is a full-stack web app that allows users to share ideas, suggestions, and feedback in a simple, organized way.

It includes both a backend API for data management and a React-based frontend for user interaction. Suggestions are stored in MongoDB, and the system ensures seamless communication between the client and server using RESTful APIs.

This project can be adapted for schools, workplaces, or communities where open idea sharing is encouraged.

# Features

💬 Create, view, and manage community suggestions

🧑‍💻 MongoDB integration for data persistence

⚙️ RESTful API endpoints for suggestion CRUD operations

💻 Modern React.js interface with real-time updates

🔒 Secure .env configuration for database credentials

🧱 Scalable backend using Express and Node.js

🧠 Technologies

Frontend: React.js, CSS
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
Tools: Axios, dotenv, nodemon

# Schema Diagram
Suggestion
├── _id: ObjectId
├── name: String
├── suggestion: String
├── date: Date
└── likes: Number


# Prerequisites

Make sure you have installed:

Node.js (v16 or above)

MongoDB (local or Atlas account)

# Installation

Clone the repository

git clone https://github.com/Lawdegoat/community-suggestion-wall.git


Install dependencies

cd backend && npm install  
cd ../frontend && npm install


Set up environment variables
Create a .env file inside the backend/ directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run the application

# Start backend
cd backend
npm start

# Start frontend
cd ../frontend
npm start

# Usage

Access the app via http://localhost:3000

Submit a new suggestion via the input form

View all suggestions on the main dashboard

Backend API runs on http://localhost:5000

# Author

Kaushik Ramakrishnan
Aspiring Software Engineer passionate about full-stack web development and real-world applications.

Investor Search AI

Project Overview

Investor Search AI is a simple single-page web application that allows users to find potential investors based on a given sector and country.
When the user enters the required inputs and clicks the **Search Investors** button, the application sends a request to an AI API and displays the top three investor suggestions along with a short reason for each.

The purpose of this project is to demonstrate basic frontend development, secure AI API integration, and clean project structure.


Technologies Used

Frontend

* HTML
* CSS
* JavaScript (Fetch API)

Backend

* Node.js
* Express.js
* OpenAI API
* dotenv
* cors

Project Structure


investor-search-ai/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env   (not committed to GitHub)
│
├── .gitignore
└── README.md

How to Run the Project

Step 1: Clone the Repository

In bash
git clone https://github.com/<your-username>/investor-search-ai.git
cd investor-search-ai

Step 2: Backend Setup

Navigate to the backend directory:
In bash
cd backend

Install the required dependencies:
In bash
npm install

Create a `.env` file inside the `backend` folder and add your OpenAI API key:
"OPENAI_API_KEY="your_openai_api_key_here"
PORT=5000"

Start the backend server:
In bash
node server.js

If the setup is correct, you will see:
Server running on port 5000

Step 3: Run the Frontend

Open the `frontend` folder and open `index.html` in a web browser.

No additional build or server setup is required for the frontend.

How the Application Works

1. The user enters a sector and a country.
2. On clicking the **Search Investors** button, the frontend sends a request to the backend.
3. The backend constructs a prompt using the provided inputs and sends it to the OpenAI API.
4. The AI returns three investor suggestions with one-line explanations.
5. The frontend displays the results dynamically with simple animations.

AI API Details

* API Used: OpenAI Chat Completion API
* Model: `gpt-4o-mini`

Prompt Format Used

"Suggest 3 investors who invest in the {sector} sector in {country}.
Give one-line reasoning for each."


API Key Security

The OpenAI API key is stored securely in a `.env` file on the backend.
This file is excluded from version control using `.gitignore`, ensuring that the API key is never exposed in the frontend code or on GitHub.

All AI requests are handled by the backend server, and the frontend communicates only with the backend endpoint.

User Interface and Styling

The application includes:

* A full-page background image with a gradient overlay
* A centered and responsive container
* Equal-sized input fields
* Button hover and click effects
* Smooth page load animation
* Animated result cards for better user experience

Demo

A short screen recording is provided showing:

* The backend server running
* User input in the frontend
* Clicking the search button
* Investor results displayed on the screen

Notes

This project is intentionally kept simple and focused.
It demonstrates core concepts such as frontend interaction, secure API usage, and clean code organization without unnecessary complexity.

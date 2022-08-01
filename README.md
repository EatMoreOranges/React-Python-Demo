# Backend
create a folder named "backend" and inside the backend folder create a file named main.py. To run the backend application uvicorn main:app --reload

# Frontend
Open a terminal in the main project directory (make sure you;re not in the backend directory). Run the command "npx create-react-app frontend". This will create a folder called frontend which holds all of your react frontend. in the frontend directory run npm start to run the frontend application. the package.json file add this key value pair in the json doc ("proxy":"http://localhostOfBackend")
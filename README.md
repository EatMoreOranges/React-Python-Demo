# Backend
we suggest creating a virtual environment for your backend
create: python310 -m venv venv
activate: source venv/Scripts/activate
deactivate: deactivate

you need to install a few packages to get this project up and running. Run the following commands:
-  pip install fastapi
-  pip install "uvicorn[standard]"

After install the packages create a folder named "backend" and inside the backend folder, create a file named main.py. Within the main.py file, add the following to create your app instance and your first endpoint!
app = FastAPI()

@app.get("/")
async def welcome():
    return "Who's Hungry!"

Now you are ready to run your backend application. To run the backend application run the uvicorn main:app --reload . If uvicorn has been installed but you're getting a uvicorn not recognized error try adding python -m  before the command. (python -m uvicorn main:app --reload)


# Frontend
Open a terminal in the main project directory (make sure you;re not in the backend directory). Run the command "npx create-react-app frontend". This will create a folder called frontend which holds all of your react frontend. in the frontend directory run npm start to run the frontend application. the package.json file add this key value pair in the json doc ("proxy":"http://localhostOfBackend")
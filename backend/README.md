Eveything you need to know about the backend!
ooor maybe some resources useful for the backend

# Set Up
 ### For this application to run, you need to run the fronend at the same time as the backend.

   # Backend
To start the backend, open a terminal within the backend directory `/React-Python-Demo/backend`. We suggest creating a virtual environment for your backend.

<details> 
<summary> Virtual Environment Setup  </summary>

**Create Envirenment:** `python3 -m venv myvenv` You only need to create the virtual envirenment once. All the files created for the virtual envirnment will be in a folder with the same name as your virtual envirnment. In this case "myvenv".

**Activate Envirenment:** `source myvenv/Scripts/activate` (_for Mac:_ `source myvenv/bin/activate`) Every time you want to use your backend (for development for just for running), you need to activate your virtual envirnment.

**Deactivate Envirenment:** deactivate

</details>

### Packages Required
Be sure to have the following packages installed before you start. 

-  `pip install "fastapi[all]"` will install both FastAPI and Uvicorn
-  `pip install python-dotenv` for reading our secrets from an .env file

### Start Backend

Now you are ready to start the backend of your application! To start the backend application, run the `uvicorn main:app --reload` command (make sure your terminal is opened at the directory `/React-Python-Demo/backend`). 

*If uvicorn has been installed but you're getting a uvicorn not recognized error try adding **python -m**  before the command* (`python -m uvicorn main:app --reload`). To see your endpoint in action, enter http://localhost:8000 in the URL space of your browser. 

# insert screenshot of final result


Http methods
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

status codes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses

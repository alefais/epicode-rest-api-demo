# Run the Rest API demo project

The app logic implemented together and the configured dependencies are already provided here.

### Step 1: Clone the project and go into the main folder

```bash
cd epicode-rest-api-demo
```

### Step 2: Install Express

```bash
npm install express
```

Express is a minimal web framework for Node.js. It makes handling HTTP requests really straightforward.

### Step 3: Test the API

Run the server:

```bash
node app.js
```

You should see something like

**Server running at `http://localhost:3000`**

If yes, great! Our environment is working.

You can stop the server with `Ctrl+C`.

Now open Postman/Bruno/Insomnia. If you don't have any of these tools installed, you can also use curl or any HTTP client.

E.g., in Postman:

1. Create a new request
2. Set the method to **GET**
3. Enter the URL: `http://localhost:3000/users`
4. Click Send
5. Observe the response received by the server

Experiment as you like with your brand new RESTful API!

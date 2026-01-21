const express = require("express");
const app = express();

app.use(express.json());

// dummy user data (in-memory)
let user = {
  username: "admin",
  password: "1234",
  loggedIn: false
};

// HOME API
app.get("/", (req, res) => {
  res.send("Node.js app running successfully");
});

/*
 LOGIN API
*/
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    user.loggedIn = true;
    res.send("Login successful");
  } else {
    res.send("Invalid username or password");
  }
});

/*
 LOGOUT API
*/
app.post("/logout", (req, res) => {
  user.loggedIn = false;
  res.send("Logout successful");
});

/*
 UPDATE API
*/
app.put("/update", (req, res) => {
  if (!user.loggedIn) {
    return res.send("Please login first");
  }

  const { username, password } = req.body;

  if (username) user.username = username;
  if (password) user.password = password;

  res.send("User updated successfully");
});

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

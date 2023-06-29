const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Secret key for JWT
const secretKey = 'your-secret-key';

// Mock user data (replace this with your own user authentication logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Endpoint for user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user based on the username and password
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Generate a JWT token with the user's ID and username
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey
    );

    // Send the token as a response
    res.json({ token });
  } else {
    // If the user is not found, return an error message
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Example protected route
app.get('/api/protected', (req, res) => {
  // Get the authorization header
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    try {
      // Verify the token using the secret key
      const decoded = jwt.verify(token, secretKey);

      // Respond with the protected data
      res.json({ message: 'Protected data', user: decoded });
    } catch (error) {
      // If the token is invalid, return an error message
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    // If no authorization header is present, return an error message
    res.status(401).json({ message: 'No token provided' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

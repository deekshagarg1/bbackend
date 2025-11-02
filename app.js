// const express = require('express');
// const cors = require("cors")

// const app = express()
// const PORT = 8000

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/about', (req, res) => {
//   res.send('About route 🎉 ')
// })

// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// })
const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for your frontend
// app.use(
//   cors({
//     origin: "https://biba-amber.vercel.app", // your frontend URL
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );



// Unable CORS for your frontend
app.use(
  cors(
//     {
//     origin: "https://biba-amber.vercel.app", // your frontend URL
//     methods: ["GET", "POST"],
//     credentials: true,
//   }
)
);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/about", (req, res) => {
  res.json({ about: "This is about page" });
});

// ✅ Use fixed port (Vercel ignores it, but required for local run)
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
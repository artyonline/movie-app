const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(logger);
app.use(cors(corsOptions));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extensions: false }));
//Controllers
app.use("/api/users", require("./routes/api/users"));
app.use("/api/wishlist", require("./routes/api/wishlist"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const PORT = process.env.PROT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const users = require("./routes/users");

const app = express();

app.use(cors({ origin: "*" }));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));

app.use(express.json());

// Routes//
app.use("/api", users);

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`running server port ${port}`);
});

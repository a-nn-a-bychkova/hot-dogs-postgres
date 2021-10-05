const express = require("express");
const PORT = process.env.PORT || 8080;
const hotdogRouter = require("./routes/hotdog.routes");
const app = express();

app.use(express.json());
app.use("/api", hotdogRouter);

app.listen(PORT, () => console.log(`Server was started on port${PORT}`));

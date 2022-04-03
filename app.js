const express = require("express");
const cors = require("cors");
const { mantra } = require("./controllers");
require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/mantras", mantra.getAll);
app.get("/api/mantras/:id", mantra.getOne);
app.post("/api/mantras", mantra.createOne);
app.post("/api/bulk", mantra.createMany);
app.patch("/api/mantras/:id", mantra.updateOne);
// app.patch("/api/mantras/bulk", mantra.updateMany);
app.delete("/api/mantras/:id", mantra.deleteOne);

app.listen(8081, () => {
  console.log("mantra api running on port 8081!");
});

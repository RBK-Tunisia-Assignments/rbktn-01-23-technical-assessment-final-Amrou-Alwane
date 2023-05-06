const express = require("express");
const app = express();
const cors=require('cors')
app.use(cors())
const PORT = 4000;
const route=require('../server/routes/recipiesRoute.js')
app.use(express.json());
// TODO - add additional route handlers as necessary
app.use("/api/recepie",route)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

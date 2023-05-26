const express = require("express");
const app = express();
const mongo = require("mongoose");
const PORT = process.env.PORT || 5000;
const routes = require("./routes/userRoutes")

const cors = require("cors")

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Connect mongodb with nodejs

const uri = `mongodb+srv://erakash7566:root12345@cluster0.3vyf8og.mongodb.net/?retryWrites=true&w=majority`


mongo
  .connect(uri)
  .then(() => {
    console.log("mongodb connect");
  })
  .catch((err) => {
    console.log(err);
  });








app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port 5000");
});


app.use(routes);
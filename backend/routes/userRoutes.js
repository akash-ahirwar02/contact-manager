const express = require("express");
const app = express();
const mongo = require("mongoose");

const userData = require("../model/usermodel");
const routes = express.Router();

// Create you first API
// Data Create Operation
routes.post("/", async (req, res) => {

  const { name, email, phone } = req.body;
  

  try {
    const data = await userData.create({
      name: name,
      email: email,
      phone: phone
    });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});



// All Data  read operation
routes.get("/", async (req, res) => {
  try {
    const allUserData = await userData.find();

    res.status(200).json(allUserData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//  single data read opeartion

routes.get("/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const singleUserData =  await userData.findById({ _id: id });
    res.status(200).json(singleUserData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




//  delete user

routes.delete("/:id", async (req, res) => {
    const {id} = req.params;
  
    try {
      const deleteUserData = await userData.findByIdAndDelete({ _id: id });
      res.status(201).json(deleteUserData);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


// update operation
routes.patch("/edit/:id", async (req,res)=>{
    const {id} = req.params;
    const {name, email, age} = req.body;

    try {
        const updateData = await userData.findByIdAndUpdate(id, req.body,{
            new:true
        })
        res.status(200).json(updateData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})
module.exports = routes;

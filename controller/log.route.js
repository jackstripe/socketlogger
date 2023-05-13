const express = require("express")
const logger = express.Router()
const { getSocket } = require("../socket")

routes.get("/", async (req, res) => {
    console.log("Se estan guardando el mensaje y nivel")
    let io = await getSocket()
    io.emit("lstUsers", {msg:"Maybe change this"})
    
    res.status(201).send({ data: [], msg: "Data..." })
}

module.exports = logger
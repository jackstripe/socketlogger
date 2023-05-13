const express = require("express")
const { initialSocket } = require("./socket")
const logger = require("./controller/log.route")
const app = express()
app.use("/v1/logger", logger)

const server = app.listen("6000", () => {
    
    console.log("Server its running in the port 6000")
})

initialSocket(server).then(io => {
    io.on("connection", (socket) => {
        console.log("User connected")
        
        socket.on("hola", (data) => {
            console.log(data)
        })
    })
})
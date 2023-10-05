const express = require("express")

const app = express()

const messagesRouter = require("./routes/messages");

app.use("/api", messagesRouter);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app
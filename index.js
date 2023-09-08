const express = require("express")

const app = express()

// middleware
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("<h2>OneProTech First Express App</h2>")
  console.log("The app works")
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))


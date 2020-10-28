const express = require('express')

const app = express()

app.get("/", (req, res) => res.send("Hello World"))

app.use("/api/workouts", require("./routes/api/workouts"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => `Server is running on port ${PORT}`)
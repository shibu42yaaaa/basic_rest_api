const expres = require('express')
const app = express()

app.get('/api/v1/hello', (req, res) => {
  res.json({"message": "Hello, World!"})
})

const post = process.env.PORT || 3000;
app.listen(port)
console.log("Listen on port:" + port)

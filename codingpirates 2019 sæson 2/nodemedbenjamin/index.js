const express = require("express");
const app = express();

app.listen(8080, () => {
	console.log("server startet")
});

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
	res.render("index.pug")
});

app.post("/", (req, res) => {
	console.log(req.body)
	res.render("minside.pug", {
		brugernavn: req.body.username,
		password: req.body.password
	})
});

app.set("view engine", "pug")
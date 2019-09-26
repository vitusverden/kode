const express = require("express");
const app = express();
const fs = require("fs")
app.listen(8080, () => {
	console.log("server startet")
});

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
	res.render("index.pug", {
		error: ""
	})
});

app.post("/register", (req, res) => {
	console.log(req.body)
	var thing = req.body.username + " " + req.body.password
	var x = true;
	var name = req.body.username
	fs.readFile('test.txt', (err, data) => {
		if (err) throw err;
		var logins = String(data).split("\n")
		for (let i = 0; i < logins.length; i++) {
			const element = logins[i];
			if (element.includes(name)) {
				x = false
				console.log(element)
			}
		}
		if (x) {
			fs.readFile('test.txt', (err, data) => {
				if (err) throw err;
				var dataToWrite = data + "\n" + thing
				fs.writeFile('test.txt', dataToWrite, (err) => {
					// throws an error, you could also catch it here
					if (err) throw err;
				
					// success case, the file was saved
					console.log('Stuff saved!');
		
					res.render("minside.pug", {
						brugernavn: req.body.username,
					})
				});
			});
		} else {
			res.render("index.pug", {
				error: "Dette account eksisterer allerede."
			})
		}
	})

	
		

	


	
});

app.post("/login", (req, res) => {
	var name = req.body.username
	fs.readFile('test.txt', (err, data) => {
		if (err) throw err;
		var logins = String(data).split("\n")
		for (let i = 0; i < logins.length; i++) {
			const element = logins[i];
			if (element.includes(name)) {
				if (req.body.password == element.replace(name + " ", "")) {
					res.render("minside.pug", {
						brugernavn: req.body.username
					})
				} else {
					res.render("index.pug", {
						error: "Ugyldigt brugernavn eller password"
					})
				}
			}
		}
	});
});

app.set("view engine", "pug")
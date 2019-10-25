const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const fs = require("fs")

var chat = [
	"[ADMIN] Chat startet"
]

app.listen(8080, () => {
	console.log("server startet")
});

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.render("index.pug", {
		error: ""
	})
});

app.post('/sendchat', (req, res) => {
	console.log(req.body)
	var acceptable = false
	var name = req.body.username
	var admin = false
	fs.readFile('test.txt', (err, data) => {
		if (err) throw err;
		var logins = String(data).split("\n")
		for (let i = 0; i < logins.length; i++) {
			const element = logins[i].split(" ");
			if (element[0] == name) {
				if (req.body.password == element[1]) {
					acceptable = true
				}
				if (element[2] == "true") {
					admin = true
					console.log()
				}
			}
		}
		if (req.body.message == "?resetchat" && admin == true) {
			chat = ["<h3>" + name + " clearede chatten</h1>"]
		} else {
			if (acceptable == true) {
				if (admin == true) {
					date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + " " + new Date().getHours() + "." + new Date().getMinutes()
					message = String(req.body.message).replace(new RegExp('<img', 'g'), '<img style="height: 25%;"');
					
					chat.push("<span style='color: red;'><b>" + name + "</b></span> " + "<span style='color: grey;'>"+ date + "</span> <br>" + message)
					res.sendStatus(200)
				} else {
					date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + " " + new Date().getHours() + "." + new Date().getMinutes()
					message = String(req.body.message).replace(new RegExp('<', 'g'), '&lt');
					
					chat.push("<b>" + name + "</b> " + "<span style='color: grey;'>"+ date + "</span> <br>" + message)
					res.sendStatus(200)
				}
			} else {
				res.sendStatus(403)
			}
		}
	});
	
});

app.post('/getchat', (req, res) => {
	var acceptable = false
	var name = req.body.username
	fs.readFile('test.txt', (err, data) => {
		if (err) throw err;
		var logins = String(data).split("\n")
		for (let i = 0; i < logins.length; i++) {
			const element = logins[i].split(" ");
			if (element.includes(name)) {
				if (req.body.password == element[1]) {
					acceptable = true
				}
			}
		}
		if (acceptable == true) {
			res.send(chat)
		} else {
			res.sendStatus(403)
		}
	});
});



app.post("/register", (req, res) => {
	var thing = req.body.username + " " + req.body.password + " false"
	var x = true;
	var name = req.body.username
	fs.readFile('test.txt', (err, data) => {
		if (err) throw err;
		var logins = String(data).split("\n")
		for (let i = 0; i < logins.length; i++) {
			const element = logins[i].split(" ");
			if (element[0] == name) {
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
						password: req.body.password,
						admin: false
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
			const element = logins[i].split(" ");
			if (element.includes(name)) {
				if (req.body.password == element[1]) {
					res.render("minside.pug", {
						brugernavn: req.body.username,
						password: req.body.password,
						admin: element[2]
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
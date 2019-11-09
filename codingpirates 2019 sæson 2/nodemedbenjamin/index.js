/*	todo
	
	Lav accet "hax 1234 true" og fix at man kan det



*/




const options = {
	port: 8080
}


const bcrypt = require("bcrypt")
const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const fs = require("fs")
var date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + " " + new Date().getHours() + "." + new Date().getMinutes()
var chat = [
	{name: "CONSOLE", date: date, message: "Chat startet", admin: true, same: false}
]

function isEqual(object1, object2) {
	var sobject1 = object1.name + " " + object1.date + " " + object1.message + " " + object1.admin + " " + object1.same
	var sobject2 = object2.name + " " + object2.date + " " + object2.message + " " + object2.admin + " " + object1.same

	return (sobject1 == sobject2)
}

function checkCreds(name, password, callback) {
	fs.readFile('test.txt', (err, data) => {
		if (err) throw err;
		var ok = false
		var admin = false
		var logins = String(data).split("\n")
		for (let i = 0; i < logins.length; i++) {
			const element = logins[i].split(" ");
			if (element[0] == name) {
				if (password == element[1]) {
					ok = true
					if (element[2] == "true") {
						admin = true
					}
				}
			}
		}
		var ret = {ok: ok, admin: admin}
		callback(ret)
		
	});
	
}

app.listen(options.port, () => {
	console.log("server startet på port " + options.port)
});

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.render("index.pug", {
		error: ""
	})
});


app.post('/deletemessage', (req, res) => {
	checkCreds(req.body.username, req.body.password, function(ret) {
		if (ret.ok == true && (ret.admin == true || req.body.name == req.body.username)) {
			var indexOf = -1
			for (let i = 0; i < chat.length; i++) {
				const element = chat[i];
				if (isEqual({name: req.body.name, date: req.body.date, message: req.body.message, admin: req.body.admin, same: req.body.same}, element)) {
					indexOf = i
					break;
				}
			}
			if (indexOf != -1) {
				chat.splice(indexOf, 1)
				if(chat[indexOf]) chat[indexOf].same = false
				
			}
			res.sendStatus(200)
		} else {
			res.sendStatus(403)
		}	
	});
});

app.post('/sendchat', (req, res) => {
	checkCreds(req.body.username, req.body.password, function(ret) {
		var name = req.body.username
		if (req.body.message == "?resetchat" && ret.admin == true) {
			date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + " " + new Date().getHours() + "." + new Date().getMinutes()
			chat = [{name: "CONSOLE", date: date, message: "Chatten blev cleared af" + name, admin: true}]
		} else {
			if (ret.ok == true) {
				date = new Date().getDate() + "/" + (new Date().getMonth() + 1) + " " + new Date().getHours() + "." + new Date().getMinutes()
				
				console.log(req.body.message)
				if(ret.admin) {
					message = String(req.body.message).replace(new RegExp('<img', 'g'), '<img style="height: 25%;"');
				} else {
					message = String(req.body.message).replace(new RegExp('&', 'g'), '&amp');
					message = String(message).replace(new RegExp('<', 'g'), '&lt');
					message = String(message).replace(new RegExp('>', 'g'), '&gt');
					message = String(message).replace(new RegExp('"', 'g'), '&quot');
					message = String(message).replace(new RegExp('\'', 'g'), '&#39');
				}
				console.log(message)
				
				if(chat[0]) {
					if(chat[chat.length - 1].name == name) {
						chat.push({name: name, date: date, message: message, admin: ret.admin, same: true})
					} else {
						chat.push({name: name, date: date, message: message, admin: ret.admin, same: false})
					}
				} else {
					chat.push({name: name, date: date, message: message, admin: ret.admin, same: true})
				}

				
				res.sendStatus(200)
			} else {
				res.sendStatus(403)
			}
		}
	});
	
});

app.post('/getchat', (req, res) => {
	checkCreds(req.body.username, req.body.password, function(ret) {	
		if (ret.ok) {
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
					if (err) throw err;
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
	checkCreds(req.body.username, req.body.password, function(ret) {
		if(ret.ok) {
			res.render("minside.pug", {
				brugernavn: req.body.username,
				password: req.body.password,
				admin: ret.admin
			})
		} else {
			res.render("index.pug", {
				error: "Ugyldigt brugernavn eller password"
			})
		}
	});
});

app.set("view engine", "pug")
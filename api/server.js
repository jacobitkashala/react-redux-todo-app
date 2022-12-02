const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let companies = [
	{
		id: nanoid(),
		companie: 'Zender',
		grade: 'DG',
	},
	{
		id: nanoid(),
		companie: 'Amazon',
		grade: 'DG',
	},
	{
		id: nanoid(),
		companie: 'BraCongo',
		grade: 'Dev',
	},
	{
		id: nanoid(),
		companie: 'Simba',
		grade: 'Designer',
	},
	{
		id: nanoid(),
		companie: 'APIcongo',
		grade: 'graph',
	},
];
let persons = [
	{
		id: nanoid(),
		idCompanie: '1',
		prenom: 'Olivier',
		nom: 'kash',
	},
	{
		id: nanoid(),
		idCompanie: '1',
		nom: 'Serge',
		prenom: 'jaco'
	},
	{
		id: nanoid(),
		idCompanie: '1',
		nom: 'Paul',
		prenom: 'muke',
	},
	{
		id: nanoid(),
		idCompanie: '1',
		nom: 'celio',
		prenom: 'mbaka',
	},
	{
		id: nanoid(),
		idCompanie: '1',
		nom: 'Emma',
		prenom: 'joseph'
	},
];

app.get('/', (req, res) => {
	res
		.status(200)
		.send([...persons, ...companies])
}
);

app.get('/personall', (req, res) => {
	res.send(persons)
});

app.get('/companieall', (req, res) => {
	res.send(companies)
});

app.post('/login', (req, res) => {
	const newCompanie = {
		idCompanie: nanoid(),
		identifier:req.body.email,
        password:req.body.password
	};
	persons.push(newCompanie);
	return res.send(persons);
});

app.patch('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	const completed = Boolean(req.body.completed);
	if (index > -1) {
		todos[index].completed = completed;
	}
	return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
	const id = req.params.id;
	const index = todos.findIndex((todo) => todo.id == id);
	if (index > -1) {
		todos.splice(index, 1);
	}

	res.send(todos);
});

const PORT = 8080;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));

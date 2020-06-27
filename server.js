const express = require('express');
const bcrypt =require('bcrypt-nodejs');
const cors=require('cors');
const knex=require('knex');


const register =require('./controllers/register');
const signin =require('./controllers/signin');
const profile =require('./controllers/profile');
const image =require('./controllers/image');

const db =knex({
	client: 'pg',
	connection:{
		host: '127.0.0.1',
		user: 'postgres',
		password: 'Shivam123',
		database: 'brain'
	}
});


const app = express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res) =>{ res.send(database.users) })
app.post('/signin',(req,res) => {signin.handlesignin(req,res,db,bcrypt)})
app.post('/register',(req,res) => {register.handleRegister(req,res,db,bcrypt) })
app.get('/profile/:id',(req,res) => {profile.handleprofileGet(req,res,db)})
app.put('/image',(req,res) => {image.handleimage(req,res,db)}) 
app.post('/imageurl',(req,res) => {image.handleApiCall(req,res)}) 

app.listen(3001, () => {
	console.log('server is running on port 3001');
})
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/helo', (req, res) => {
	res.status(200).send('helo');
});

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});

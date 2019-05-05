const app = require('../src/app.js');
require('dotenv').config()
const { PORT, HOST } = process.env;

app.get('/', (req, res) => {
	res.send("<h2>U GOT SERVED..</h2>- xoxo express 💪🏼")
})

app.listen(PORT, () => console.log(`listening on http://${ HOST }:${ PORT }`))

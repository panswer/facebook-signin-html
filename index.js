const server = require('./server/server');

const PORT=process.env.SERVER_PORT;
server.listen(PORT,err=>err?console.log(err):console.log(`Server on port ${PORT}`));
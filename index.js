const http = require("http");

const index = process.env.INDEX;
const port = 3000 + parseInt(index, 10);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type" + "text/plain");
    // Obtain the real CLIENT IP address
    const ip = req.headers['x-forwarded-for']
    req.socket.remoteAddress
    res.end(JSON.stringify({ index, ip }))
});

server.listen(port, () => {
    console.log(`Server running at ${port}`)
});
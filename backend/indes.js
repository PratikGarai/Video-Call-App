const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
    cors : {
        origin : "*",
        methods: ["GET, POST"],
    }
});

app.use(cors());

const POST = process.env.POST || 5000;

app.get("/", (req, res) => {
    res.send("Server is running...");
});

server.listen(5000, ()=> {
    console.log(`Server launched on PORT ${PORT}`);
});
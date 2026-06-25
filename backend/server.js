import express from 'express'
import  {createServer}  from 'http'
import { Server } from 'socket.io'
import { YSocketIO } from "y-socket.io/dist/server"

const app = express();
const httpServer = createServer(app);


const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})


const ySocketIo = new YSocketIO(io);
ySocketIo.initialize();


app.get('/',(req, res)=>{
    res.status(200).json({
        message: 'Server is running',
        success : true
    })
})

app.get('/health', (req, res)=>{
    res.status(200).json({
        message: 'Server is healthy',
        success : true
    })
})

httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});
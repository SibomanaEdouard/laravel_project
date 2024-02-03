import "reflect-metadata";
import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server, Socket } from "socket.io";
import { messageRoutes } from "./routes/messagesRouter/messages.routes";

config();

const app: Application = express();
const server = http.createServer(app);
const io = new Server(server);

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO || 'default_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);


const mongodbConnection = mongoose.connection;

mongodbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongodbConnection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));



// Socket.io connection handling
io.on('connection', (socket: Socket) => {
  console.log('Active');

  // Broadcast a welcome message to the connected client
  socket.emit('serverMessage', { content: 'Welcome to the chat!', sender: 'System' });

  
  socket.on('clientMessage', (data: any) => {
    console.log('Received message from client:', data);

    // Broadcast the received message to all connected clients
    io.emit('serverMessage', { content: data.content, sender: data.sender });
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('Inactive');
  });
});

app.use("/api/v1/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server running on ${process.env.MONGO}:${PORT}`);
});

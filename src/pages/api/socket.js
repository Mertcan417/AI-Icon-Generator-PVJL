// pages/api/socket.js
import { Server } from 'socket.io';

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      console.log('A user connected');

      socket.on('message', (msg) => {
        io.emit('message', msg);
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected');
      });
    });

    res.socket.server.io = io;
  }

  res.end();
}

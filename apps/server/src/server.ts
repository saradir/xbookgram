import app from './app.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { corsConfig } from './config/cors.js';

const PORT = process.env.PORT || 3000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: corsConfig,
});

io.on('connection', (socket) => {
  socket.on('join', (userId: number) => socket.join(`user:${userId}`));
});

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export { io };

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import authRoutes from './routes/auth.js';
import masterAdminRoutes from './routes/masterAdmin.js';
import bookieRoutes from './routes/bookie.js';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

// app.use('/api/auth', authRoutes);
app.use('/api/master-admin', masterAdminRoutes);
app.use('/api/bookie', bookieRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.error(err));

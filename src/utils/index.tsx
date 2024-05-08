import mongoose from 'mongoose';

const connection: {
    isConnected: boolean;
} = {
    isConnected: false,
};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI || '');
        console.log('DB Connected');
        connection.isConnected = Boolean(db.connections[0].readyState);
    } catch (error) {
        console.log(error);
        throw new Error(String(error));
    }
};

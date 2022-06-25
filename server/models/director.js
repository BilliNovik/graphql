import mongoose from 'mongoose'

const directorSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

export default mongoose.model('Director', directorSchema);
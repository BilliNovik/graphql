import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    name: String,
    genre: String,
    directorId: String,
});

export default mongoose.model('Movie', movieSchema);
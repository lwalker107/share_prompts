import mongoose, { Schema, model, models } from 'mongoose';
// Models created for making new post

const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
});

// creates new prompt if it doesn't exist using the promptschema

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;
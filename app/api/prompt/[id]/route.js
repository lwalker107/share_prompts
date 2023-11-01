import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';

// GET(read)
export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate('creator');
        if(!prompt) return new Response("Prompt not found", { status: 404});

        return new Response(JSON.stringify(prompt), { 
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { 
            status: 500
        })
    }
}

// PATCH (update)
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await requestAnimationFrame.json();

    try {
        // awaiting connection to MongoDB database
        await connectToDB
        // Checks to see if prompt already exists by looking for the prompt id
        const existingPrompt = await Prompt.findById(params.id);
        // if it doesn't return status code and string
        if(!existingPrompt) return new Response("Prompt not found", { status: 404 })
        // if it does exist, replace the exising prompt and tag with new one
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag
        // save the new prompt
        await existingPrompt.save();
        // return new response showing that the update worked
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to update prompt", {
            status: 500
    })
    }
}

// DELETE (delete)
export const DELETE = async (req, { params }) => {
    try {
        // awaiting connection to MongoDB database
        await connectToDB
        // Checks to see if prompt already exists by looking for the prompt id 
        // and removes it
        const existingPrompt = await Prompt.findByIdAndRemove(params.id);
        // return new response showing that the update worked
        return new Response("Prompt deleted successfully", { status: 200 })
    } catch (error) {
        return new Response("Failed to delete prompt", {
            status: 500
    })
    }
}
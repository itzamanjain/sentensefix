'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

const google_api_key = process.env.GOOGLE_GEMINI_API;

if (!google_api_key) {
    throw new Error('Google API key is not set!!');
}

const gen_ai = new GoogleGenerativeAI(google_api_key);

const model = gen_ai.getGenerativeModel({
    model: 'gemini-1.5-pro-latest',
});

export async function run(inputText: string): Promise<string> {
    const prompt = "Correct only  the grammar of the following text do not give any extra details like where i corrected etc : " + inputText;

    const result = await model.generateContent(prompt);

    const response = result.response;

    const text =  response.text();

    const correctedText = text.replace(/\*\*/g, '');

    return correctedText;
}

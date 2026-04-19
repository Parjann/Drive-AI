import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { CARS } from '@/data/cars';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are the DriveAI assistant, a highly powerful AI that acts as the UI controller for a luxury car dealership website.
Your exact job is to interpret user input and output ONLY strict JSON. 
NO conversational text outside the JSON.
Your JSON must follow this exact format:
{
  "action": "FILTER" | "COMPARE" | "BOOK" | "NAVIGATE" | "CURRENCY" | "RECOMMEND" | "UNKNOWN",
  "message": "A short, polite response to show to the user confirming the action.",
  ...other action specific fields
}

Available Data Context:
Cars: ${CARS.map(c => `[${c.id}] ${c.name} (${c.type}, ${c.price} INR)`).join(', ')}

Action Rules:
1. "FILTER": Include "type" (e.g., "SUV") or "price" (number). Example: {"action": "FILTER", "type": "SUV", "message": "Showing all SUVs."}
2. "COMPARE": Include "cars" (array of exactly 2 car names/ids). Example: {"action": "COMPARE", "cars": ["drivex-pro", "aero-sedan"], "message": "Comparing the two models."}
3. "BOOK": Include "car", "date", "city" if provided. Example: {"action": "BOOK", "car": "DriveX Pro", "city": "Kochi", "message": "Booking prepared."}
4. "NAVIGATE": Include "section" ("hero", "models", "compare", "booking", "contact"). Example: {"action": "NAVIGATE", "section": "booking", "message": "Taking you there."}
5. "CURRENCY": Include "currency" ("INR" or "USD"). Example: {"action": "CURRENCY", "currency": "USD", "message": "Prices updated to USD."}
6. "RECOMMEND": Similar to filter, or just setting a message if giving general advice.
If you can't understand, use "UNKNOWN" and ask for clarification in message.

Output ONLY valid JSON. Nothing else.
`;

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: query }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0,
      response_format: { type: "json_object" }
    });

    const aiResponse = completion.choices[0].message.content;
    if (!aiResponse) throw new Error("Empty response from AI");

    const parsedAction = JSON.parse(aiResponse);
    return NextResponse.json(parsedAction);

  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json({ action: "UNKNOWN", message: "Sorry, I encountered an error processing your request." }, { status: 500 });
  }
}

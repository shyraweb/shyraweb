import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const USER_ROLE = "user";
const ASSISTANT_ROLE = "assistant";

export async function POST(req: NextRequest) {
  try {
    const { projectDescription, groqApiKey, modal } =
      await req.json();

    // Use the provided GROQ_API_KEY or fallback to the environment variable
    const groqInstance = new Groq({
      apiKey: groqApiKey || process.env.GROQ_API_KEY,
    });

    const newConversation = [
      {
        role: USER_ROLE,
        content: projectDescription,
      },
    ];

    const response = await groqInstance.chat.completions.create({
      messages: [{ role: ASSISTANT_ROLE, content: "" }, {
        role: USER_ROLE,
        content: projectDescription,
      }],
      model: modal || process.env.NEXT_PUBLIC_MODAL_TO_USE, // Use the provided modal or fallback
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: true,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          controller.enqueue(
            encoder.encode(chunk.choices[0]?.delta?.content || "")
          );
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error generating:", error);
    return NextResponse.json(
      { message: "Failed to generate" },
      { status: 500 }
    );
  }
}

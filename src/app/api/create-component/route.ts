import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Component } from "@/lib/schema/component";

// ✅ Optional: Utility to connect only if not connected
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    // ✅ Optional: Add basic validation
    if (!body.category || !body.html || !body.thumbnail) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const newComponent = new Component(body);
    const savedComponent = await newComponent.save();

    return NextResponse.json(
      { success: true, data: savedComponent },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Component creation error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}

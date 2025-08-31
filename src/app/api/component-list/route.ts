import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Component } from "@/lib/schema/component";
import { COMPONENTS_LIST_WITH_CATEGORY } from "@/constants/ComponentsCategory";

// ✅ Utility to connect DB only if not already connected
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
}

export async function GET() {
  try {
    await connectDB();

    const allComponents = await Component.find();

    const categorizedData = COMPONENTS_LIST_WITH_CATEGORY.map((category) => {
      const samples = allComponents.filter(
        (component) => component.category === category.id
      );

      return {
        ...category,
        samples,
      };
    });

    return NextResponse.json(
      { result: categorizedData, success: true },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error in GET /components:", error);

    let message = "Failed to fetch components";

    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "brands");
    const files = await fs.promises.readdir(dir);
    const images = files
      .filter((f) => /\.(png|jpe?g|svg|webp|gif)$/i.test(f))
      .map((f) => `/brands/${f}`);

    return NextResponse.json({ images });
  } catch (err) {
    return NextResponse.json({ images: [] });
  }
}

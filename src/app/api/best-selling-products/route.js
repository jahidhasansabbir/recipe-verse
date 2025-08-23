import connectDb from "@/lib/connectDb";
import { NextResponse } from "next/server";

export async function GET() {

    const data = await connectDb("watches")
      .find()
      .sort({  totalSells: -1 }) 
      .limit(4) 
      .toArray();

    return NextResponse.json(data);
  
  
}

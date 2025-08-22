import connectDb from "@/lib/connectDb";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";

export async function GET(request, {params} ) {
  const {id} = await params;
  const query = {_id: new ObjectId(id)}
  const data = await connectDb("watches").findOne(query);
  return NextResponse.json(data);
}

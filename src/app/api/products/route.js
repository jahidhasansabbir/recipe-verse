import connectDb from "@/lib/connectDb";

export async function GET() {
    const data = await connectDb('watches').find().toArray()
    return Response.json(data);
    
}
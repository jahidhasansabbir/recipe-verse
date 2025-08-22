import connectDb from "@/lib/connectDb";

export async function GET() {
    const data = await connectDb('watches').find().toArray()
    return Response.json(data);
    
}
export async function POST(req) {
    const productData = await req.json();
    const data = await connectDb('watches').insertOne(productData)
    return Response.json(data);
    
}
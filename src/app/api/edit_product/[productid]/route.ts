import { connectDb } from "@/libs/models/MongoConnect";
import productModel from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, URLParas: any) {
  try {
    const body = await req.json();

    const { productid } = URLParas.params;
    const { name, category, price } = body;
    await connectDb();

    const data = await productModel.findByIdAndUpdate(productid, {
      name,
      category,
      price,
    });
    return NextResponse.json({message:"Product updated Successfully"});
  } catch (error) {
    return NextResponse.json(
      { error, message: "Something went wrong" },
      { status: 400 }
    );
  }
}

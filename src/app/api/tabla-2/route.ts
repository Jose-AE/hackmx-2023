import Table2 from "@/models/Table2";
import ConnectToMongoDB from "@/utils/MongodbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await ConnectToMongoDB();
  const response = await Table2.find();
  return NextResponse.json(response, { status: 200 });
}

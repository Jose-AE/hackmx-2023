import MainTable from "@/models/MainTable";
import ConnectToMongoDB from "@/utils/MongodbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await ConnectToMongoDB();
  const response = await MainTable.find();
  return NextResponse.json(response, { status: 200 });
}

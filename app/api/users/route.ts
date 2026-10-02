import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
//    const db = client.db("admin");
    const db = client.db("lpdata");

    const usuarios = await db.collection("users").find({}).toArray();

    return NextResponse.json(usuarios);
  } catch (error) {
    return NextResponse.json(
      { error: "Error conectando a la base de datos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  const client = await clientPromise;
  //const db = client.db("admin");
  const db = client.db("lpdata");

  //const result = await db.collection("usuarios").insertOne(body);
  const result = await db.collection("users").insertOne(body);

  return NextResponse.json(result, { status: 201 });
}

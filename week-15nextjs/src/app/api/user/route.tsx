import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {

  const user = await client.user.findFirst();
  return NextResponse.json({
    email:user?.email,
    name:"rishabh"
  });
}
console.log("here is the output for the code and also code review")


export async function POST(req: NextRequest) {
  //body
  const body = await req.json();

 try {
 await client.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  // header
  console.log(req.headers.get("authorization"));

  //serachparams
  console.log(req.nextUrl.searchParams.get("name"));

  //postgres      postgresql://neondb_owner:rjO34MdPlAFi@ep-bold-paper-a51gcq0g.us-east-2.aws.neon.tech/neondb?sslmode=require
   NextResponse.json({
    body
  })
 } catch (error) {
  NextResponse.json({
    messge: "Error while Signup",
  },{
    status:411
  });
 }
}

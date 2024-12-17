import next from "next";
import { NextRequestHint } from "next/dist/server/web/adapter";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    email: "email@rishabh.com",
    name: "rishabh",
  });
}


export async function POST(req:NextRequest) {
    //body

    const body = await req.json()

    // header
    console.log(req.headers.get("authorization"));

    //serachparams
    console.log(req.nextUrl.searchParams.get("name"))

    return NextResponse.json({
        messge:"You are signe up"
    })
}
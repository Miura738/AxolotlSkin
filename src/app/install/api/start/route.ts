import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {


    const DATABASE_PREFIX = process.env.DATABASE_PREFIX
    console.log(DATABASE_PREFIX)


    return NextResponse.json({"code": 500 });
}

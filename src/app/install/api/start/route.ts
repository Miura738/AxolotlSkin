import {NextRequest, NextResponse} from "next/server";
import * as dotenv from "dotenv";


export async function GET(request: NextRequest) {


    dotenv.config()
    const DATABASE_PREFIX = process.env.DATABASE_PREFIX
    console.log(DATABASE_PREFIX)


    return NextResponse.json({"code": 500 });
}

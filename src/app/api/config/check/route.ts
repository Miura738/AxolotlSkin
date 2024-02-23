import {NextResponse} from "next/server";
import fs from "fs";

export async function GET(request: Request) {

    if (fs.existsSync(".env")) {
        return NextResponse.json({"code":1})
    }

    return NextResponse.json({"code":0})
}
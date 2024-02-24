import {NextRequest, NextResponse} from "next/server";
import mysql from "mysql";
import fs from "fs";
import * as dotenv from "dotenv";
export async function GET(request: NextRequest) {

    const host = request.nextUrl.searchParams.get("host")?.toString()
    const port = Number(request.nextUrl.searchParams.get("port"))

    const username = request.nextUrl.searchParams.get("user")?.toString()
    const password = request.nextUrl.searchParams.get("pwd")?.toString()

    const database = request.nextUrl.searchParams.get("db")?.toString()
    const prefix = request.nextUrl.searchParams.get("prefix")?.toString()

    const connection = mysql.createConnection({
        host: host,
        port: port,
        user: username,
        password: password,
        database: database
    })

    const queryResult = await new Promise((resolve) => {
        connection.query("SHOW DATABASES", function (error: any, results?: any) {
            if (error) resolve(error.code);
            resolve(results);
        });
    });

    connection.end();

    if (queryResult) {
        if (queryResult == "ENOTFOUND") return NextResponse.json({"code": -1 });
        else if (queryResult == "ECONNREFUSED") return NextResponse.json({"code": -2 });
        else if (queryResult == "UNSUPPORTED_AUTH_METHOD") return NextResponse.json({"code": 401 });
        else {
            const database_list: string[] = [];

            for (const index in queryResult) {
                if (queryResult.hasOwnProperty(index)) {
                    // @ts-ignore
                    database_list.push(queryResult[index]["Database"]);
                }
            }
            if (database && database_list.includes(database)) {

                fs.copyFileSync(".env.example", ".env.temp");
                fs.readFile(".env.temp", 'utf8', (err, data) => {
                    if (err) {
                        console.error('error:', err);
                        return;
                    }

                    // 替换文件中的内容
                    const lines = data.split('\n');
                    const updatedLines = lines.map(line => {
                        if (line.startsWith('DATABASE_HOST')) return `DATABASE_HOST = ${host}`;
                        if (line.startsWith('DATABASE_PORT')) return `DATABASE_PORT = ${port}`;

                        if (line.startsWith('DATABASE_USERNAME')) return `DATABASE_USERNAME = ${username}`;
                        if (line.startsWith('DATABASE_PASSWORD')) return `DATABASE_PASSWORD = ${password}`;

                        if (line.startsWith('DATABASE_DATABASE')) return `DATABASE_DATABASE = ${database}`;
                        if (line.startsWith('DATABASE_PREFIX')) return `DATABASE_PREFIX = ${prefix}`;


                        return line;
                    });

                    // 将更新后的内容写入.env文件
                    const updatedData = updatedLines.join('\n');
                    fs.writeFile('.env.temp', updatedData, 'utf8', (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        console.log('success！');
                    });
                });
                return NextResponse.json({"code": 0 })
            }
            else return NextResponse.json({"code": -3 })

        }
    }
    return NextResponse.json({"code": 500 });
}

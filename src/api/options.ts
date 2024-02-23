import connection from "@/api/database";


const DATABASE_PREFIX = process.env.DATABASE_PREFIX




export default function getOption(value: string) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT value FROM ${DATABASE_PREFIX}options WHERE \`key\`="${value}"`, function (error: any, results?: any[], fields?: any) {
            if (error) {
                resolve(null);
                // reject(error);
            } else {
                const result = results?.[0]?.value;
                resolve(result);
            }
        });
    });
}






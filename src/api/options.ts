import connection from "@/api/database";


const DATABASE_PREFIX = process.env.DATABASE_PREFIX

type Options = {
      [key: string]: string;
}

const defaultOptions: Options  = {
    site_title: "AxolotlSkin",
    site_sub: "Axolotl Minecraft skin relay server project",
    site_desc: "A Minecraft skin relay server project, allows you to customize a player's Cape",
    site_icon: "https://api.mio.am/project/axolotl/icon",
    site_theme: "#aae5ff",
}


export default async function getOption(value: string) {

     const queryResult = await new Promise((resolve, reject) => {
        connection.query(`SELECT value FROM ${DATABASE_PREFIX}options WHERE \`key\`="${value}"`, function (error: any, results?: any[], fields?: any) {
            if (error) {
                return null;
                // reject(error);
            } else {
                const result = results?.[0]?.value;
                if (result) {
                    resolve(result);

                } else {
                    if (value in defaultOptions) {
                        connection.query(`INSERT INTO ${DATABASE_PREFIX}options VALUES ("${value}","${defaultOptions[value]}")`, function (error: any, results?: any[], fields?: any) {
                            if (error) {
                                console.log(error);
                                resolve(results);
                            }
                            resolve(defaultOptions[value]);

                        })
                    }
                }
            }
        });
    });
        return queryResult;

}






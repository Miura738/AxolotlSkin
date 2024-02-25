import Main from "@/app/install/main";
import fs from "fs";
import Custom404 from "@/app/not-found";
import {Metadata} from "next";
import getOption from "@/api/options";
export const metadata: Metadata = {}

export default async function Home() {


  if (fs.existsSync(".env")) {
    const title = await getOption("site_title") as string;
    metadata.title = `404 NotFound > ${title}`;

    return <Custom404 />
  }

  return <Main />;
}

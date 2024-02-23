import Main from "@/app/install/main";
import fs from "fs";
import Custom404 from "@/app/not-found";

export default function Home() {


  if (fs.existsSync(".env")) {
    return <Custom404 />
  }

  return <Main />;
}

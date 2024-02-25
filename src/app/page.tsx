import getOption from "@/api/options";
import {Metadata} from "next";



export const metadata: Metadata = {}

export default async function Home() {


    const title = await getOption("site_title") as string;
    metadata.title = `Index > ${title}`;

  return (
      <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
flex items-center justify-center`}>
          {title}
      </div>
  );
}

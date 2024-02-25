import Creeper from "@/assets/creeper.webp"
import Image from "next/image";
import {Metadata} from "next";
import getOption from "@/api/options";
import Link from "next/link";
import React from "react";
import Shojo from "@/app/component/shojo";
import TemplateIndex from "@/app/component/template-index";
export const metadata: Metadata = {}

export default async function Custom404() {

    const title = await getOption("site_title") as string;
    metadata.title = `404 NotFound > ${title}`;

  return (
      <TemplateIndex>
          <div className={`flex flex-col items-center bg-white bg-opacity-40 p-8 px-20`}>
              <Image src={Creeper} alt={`404_image`}/>
              <div className={`text-2xl mt-8 mb-3`}>404 Page Not Found</div>
              <Shojo/>
          </div>
      </TemplateIndex>
  )
}
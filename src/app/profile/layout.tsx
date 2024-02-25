import type { Metadata } from "next";
import React from "react";
import getOption from "@/api/options";
import Header from "@/app/profile/Header";


export const metadata: Metadata = {}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const themeColor = await getOption("site_theme") as string;


    const title = await getOption("site_title") as string;
    metadata.title = `Profile > ${title}`;


  return (
      <div className={`w-screen h-screen bg-[url(/static/bg-wool-light.png)]
flex flex-col items-center justify-start`}>
          <Header></Header>
          <div className={`flex-grow flex w-full`}>
              <div className={`w-56 bg-[#ede5e2]`}></div>
              <div className={`flex-grow`}
                   style={{background: themeColor}}>
                  <div className={`w-full h-full bg-yellow-800 bg-opacity-30`}>
                      <div className={`w-full bg-black h-12 bg-opacity-35`}></div>
                      {children}
                  </div>

              </div>
          </div>
      </div>
  );
}


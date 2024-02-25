import type { Metadata } from "next";
import "../assets/globals.css";
import fs from "fs";
import Home from "@/app/install/page";
import React from "react";
import getOption from "@/api/options";


export const metadata: Metadata = {
  title: "Axolotl Minecraft Skin SpaceStation | By Miourasaki Network",
  description: "Generated by create next app",
  icons: "https://api.mio.am/project/axolotl/icon"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const title = await getOption("site_title") as string;
    const sub = await getOption("site_sub") as string;
    metadata.title = `${title} ~ ${sub}`;

    const desc = await getOption("site_desc") as string;
    metadata.description = desc;

    const icon = await getOption("site_icon") as string;
    metadata.icons = icon;




  if (!fs.existsSync(".env")) {
    return (
      <html lang="en">
        <body>
          <Home></Home>
        </body>
      </html>
    )
  }


  return (
      <html lang="en">
      <body>{children}</body>
    </html>
  );
}


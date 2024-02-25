import type { Metadata } from "next";
import "../assets/globals.css";
import fs from "fs";
import Home from "@/app/install/page";
import React from "react";
import getOption from "@/api/options";
import "bootstrap-icons/font/bootstrap-icons.css"

export const metadata: Metadata = {
  title: "Axolotl Minecraft Skin SpaceStation | By Miourasaki Network",
  description: "A Minecraft skin relay server project, allows you to customize a player's Cape",
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
    if (desc) metadata.description = desc;

    const icon = await getOption("site_icon") as string;
    if (icon) metadata.icons = icon;




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


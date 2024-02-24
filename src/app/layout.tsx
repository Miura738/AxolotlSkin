import type { Metadata } from "next";
import "../assets/globals.css";
import fs from "fs";
import Home from "@/app/install/page";
import React from "react";


export const metadata: Metadata = {
  title: "Axolotl Minecraft Skin SpaceStation | By Miourasaki Network",
  description: "Generated by create next app",
  icons: "https://api.mio.am/project/axolotl/icon"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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


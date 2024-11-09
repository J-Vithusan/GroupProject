import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google";

import LeftSideBar from "../../../components/layout/LeftSideBar";
import TopBar from "../../../components/layout/TopBar";
import { ToasterProvider } from "../../../lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neon - Admin Dashboard",
  description: "Admin dashboard to manage Neon's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <div className="flex max-lg:flex-col text-grey-1">
            <LeftSideBar />
            <TopBar />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}


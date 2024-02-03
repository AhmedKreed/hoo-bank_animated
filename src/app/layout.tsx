import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hoo-Bank",
  description: `The Next Generation Payment Method.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="svg" />
      </head>
      <body className={`${poppins.className} `}>
        <main className="bg-primary w-full overflow-hidden relative text-white">
          <Nav />
          <div className="absolute left-[-65px] top-[200px] white__gradient rounded-full w-[195px] h-[324px]" />
          <div className="absolute left-[-400px] lg:top-[1500px] md:top-[2700px] top-[2900px] white__gradient rounded-full w-[405px] h-[470px]" />
          {children}
        </main>
      </body>
    </html>
  );
}

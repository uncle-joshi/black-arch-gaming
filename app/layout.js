import { Inter } from "next/font/google";
import "./globals.css";
import SideMenu from "@/Components/Menu/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BLACK-ARCH GAMING",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex gap-5 p-1">
          <div>
            <SideMenu />
          </div>
          <div className="w-full rounded-xl border-2 border-[#f51524]">
        {children}
          </div>
        </main>
      </body>
    </html>
  );
}

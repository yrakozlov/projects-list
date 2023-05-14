import { Space_Grotesk } from "next/font/google";

import "@/assets/styles/globals.scss";
import { Providers } from "@/globalRedux/provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Project List",
  description: "Project List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

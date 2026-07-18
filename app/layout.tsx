import "./globals.css";
import { Poppins } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

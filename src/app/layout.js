import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const kolkerBrush = localFont({
  src: "./fonts/KolkerBrushRegular.ttf",
  variable: "--font-kolker-brush",
  weight: "100 900",
});
const rajdhaniSemiBold = localFont({
  src: "./fonts/RajdhaniSemiBold.ttf",
  variable: "--font-rajdhaniSemiBold",
  weight: "500",
});


export const metadata = {
  title: "Portfolio",
  description: "RJ Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kolkerBrush.variable} ${rajdhaniSemiBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

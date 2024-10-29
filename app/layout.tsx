import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { clsx } from "clsx";

import { Providers } from "./providers";
import Header from "../components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "StudyScape",
  description: "授業管理Webアプリケーション",
};

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="StudyScape" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={clsx([inter.className, noto.className])}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

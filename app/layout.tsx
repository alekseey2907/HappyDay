import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });
const pacifico = Pacifico({ 
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: '--font-pacifico',
});

export const metadata: Metadata = {
  title: "С Днём Рождения, Валерия! 🎉",
  description: "Поздравление с 24-летием для самой любимой девушки",
  icons: {
    icon: '/heart.svg',
    apple: '/heart.svg',
  },
  openGraph: {
    title: "С Днём Рождения, Валерия! 🎉",
    description: "Особенное поздравление с 24-летием",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} ${pacifico.variable}`}>{children}</body>
    </html>
  );
}

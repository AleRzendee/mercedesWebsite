import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mercedes-Benz",
  description: "Mercedes-Benz website",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import config from "@/config/config";

import MainLayout from "@/layout/MainLayout";

export const metadata = {
  title: config.appName,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="dark:bg-gray-800">

                <MainLayout>{children}</MainLayout>

      </body>
    </html>
  );
}

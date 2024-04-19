import type { Metadata } from "next";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { GoogleAnalytics } from "@/components/analytics";

export const metadata: Metadata = {
  title: "MS-MANO: Enabling Hand Pose Tracking with Biomechanical Constraints",
  description:
    'Project Page for the CVPR 2024 paper: "MS-MANO: Enabling Hand Pose Tracking with Biomechanical Constraints"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      </head>
      <body>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}

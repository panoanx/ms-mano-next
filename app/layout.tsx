import type { Metadata } from "next";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "CVPR24 MS-MANO",
  description:
    "MS-MANO: Enabling Hand Pose Tracking with Biomechanical Constraints",
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
        <TailwindIndicator />
      </body>
    </html>
  );
}

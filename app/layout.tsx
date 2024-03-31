import type { Metadata } from "next";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "MS-MANO",
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
      <body>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
